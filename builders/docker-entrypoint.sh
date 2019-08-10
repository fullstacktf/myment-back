#!/bin/bash
set -eo pipefail
shopt -s nullglob

if [[ $(whoami) == 'root' ]]; then
    whoami
    echo
    echo 'Initializate express app'
    echo
    npm ci --only=prod --loglevel=verbose
fi
# if command starts with an option, prepend mysqld
echo "$1"
echo "$2"
echo "$3"
if [ "${1:0:1}" = '-' ]; then
    echo "$@"
fi

whoami && id
echo "$@"
_check_config() {
	toRun=( mysqld --verbose --help --log-bin-index="$(mktemp -u)" )
	if ! errors="$("${toRun[@]}" 2>&1 >/dev/null)"; then
		cat >&2 <<-EOM

			ERROR: mysqld failed while attempting to check config
			command was: "${toRun[*]}"

			$errors
		EOM
		exit 1
	fi
}

# Fetch value from server config
# We use mysqld --verbose --help instead of my_print_defaults because the
# latter only show values present in config files, and not server defaults
_get_config() {
	local conf="$1"; shift
	mysqld --verbose --help --log-bin-index="$(mktemp -u)" 2>/dev/null \
		| awk '$1 == "'"$conf"'" && /^[^ \t]/ { sub(/^[^ \t]+[ \t]+/, ""); print; exit }'
	# match "datadir      /some/path with/spaces in/it here" but not "--xyz=abc\n     datadir (xyz)"
}

# allow the container to be started with `--user`
if [ "$(id -u)" = '0' ]; then
	_check_config "mysqld"
	DATADIR="$(_get_config 'datadir' "mysqld")"
	mkdir -p "$DATADIR"
	find "$DATADIR" \! -user mysql -exec chown mysql '{}' +
    #TODO use less protective su command
    su mysql "$BASH_SOURCE" "mysqld"
	exec gosu mysql "$BASH_SOURCE" "mysqld"
fi


# still need to check config, container may have started with --user
_check_config mysqld
# Get config
DATADIR="$(_get_config 'datadir' mysqld)"

if [ ! -d "$DATADIR/mysql" ]; then
    if [ -z "$MYSQL_ROOT_PASSWORD" -a -z "$MYSQL_ALLOW_EMPTY_PASSWORD" -a -z "$MYSQL_RANDOM_ROOT_PASSWORD" ]; then
        echo >&2 'error: database is uninitialized and password option is not specified '
        echo >&2 '  You need to specify one of MYSQL_ROOT_PASSWORD, MYSQL_ALLOW_EMPTY_PASSWORD and MYSQL_RANDOM_ROOT_PASSWORD'
        exit 1
    fi

    mkdir -p "$DATADIR"

    echo 'Initializing database'
    installArgs=( --datadir="$DATADIR" --rpm )
    if { mysql_install_db --help || :; } | grep -q -- '--auth-root-authentication-method'; then
        # beginning in 10.4.3, install_db uses "socket" which only allows system user root to connect, switch back to "normal" to allow mysql root without a password
        # see https://github.com/MariaDB/server/commit/b9f3f06857ac6f9105dc65caae19782f09b47fb3
        # (this flag doesn't exist in 10.0 and below)
        installArgs+=( --auth-root-authentication-method=normal )
    fi
    # "Other options are passed to mysqld." (so we pass all "mysqld" arguments directly here)
    mysql_install_db "${installArgs[@]}" "${@:2}"
    echo 'Database initialized'

    SOCKET="$(_get_config 'socket' mysqld)"
    mysqld --skip-networking --socket="${SOCKET}" &
    pid="$!"

    mysql=( mysql --protocol=socket -uroot -hlocalhost --socket="${SOCKET}" )

    for i in {30..0}; do
        if echo 'SELECT 1' | "${mysql[@]}" &> /dev/null; then
            break
        fi
        echo 'MySQL init process in progress...'
        sleep 1
    done
    if [ "$i" = 0 ]; then
        echo >&2 'MySQL init process failed.'
        exit 1
    fi

    if [ -z "$MYSQL_INITDB_SKIP_TZINFO" ]; then
        # sed is for https://bugs.mysql.com/bug.php?id=20545
        mysql_tzinfo_to_sql /usr/share/zoneinfo | sed 's/Local time zone must be set--see zic manual page/FCTY/' | "${mysql[@]}" mysql
    fi

    if [ ! -z "$MYSQL_RANDOM_ROOT_PASSWORD" ]; then
        export MYSQL_ROOT_PASSWORD="$(pwgen -1 32)"
        echo "GENERATED ROOT PASSWORD: $MYSQL_ROOT_PASSWORD"
    fi

    rootCreate=
    # default root to listen for connections from anywhere
    if [ ! -z "$MYSQL_ROOT_HOST" -a "$MYSQL_ROOT_HOST" != 'localhost' ]; then
        # no, we don't care if read finds a terminating character in this heredoc
        # https://unix.stackexchange.com/questions/265149/why-is-set-o-errexit-breaking-this-read-heredoc-expression/265151#265151
        read -r -d '' rootCreate <<-EOSQL || true
            CREATE USER 'root'@'${MYSQL_ROOT_HOST}' IDENTIFIED BY '${MYSQL_ROOT_PASSWORD}' ;
            GRANT ALL ON *.* TO 'root'@'${MYSQL_ROOT_HOST}' WITH GRANT OPTION ;
EOSQL
    fi

    "${mysql[@]}" <<-EOSQL
        -- What's done in this file shouldn't be replicated
        --  or products like mysql-fabric won't work
        SET @@SESSION.SQL_LOG_BIN=0;

        DELETE FROM mysql.user WHERE user NOT IN ('mysql.sys', 'mysqlxsys', 'root') OR host NOT IN ('localhost') ;
        SET PASSWORD FOR 'root'@'localhost'=PASSWORD('${MYSQL_ROOT_PASSWORD}') ;
        GRANT ALL ON *.* TO 'root'@'localhost' WITH GRANT OPTION ;
        ${rootCreate}
        DROP DATABASE IF EXISTS test ;
        FLUSH PRIVILEGES ;
EOSQL

    if [ ! -z "$MYSQL_ROOT_PASSWORD" ]; then
        mysql+=( -p"${MYSQL_ROOT_PASSWORD}" )
    fi

    if [ "$MYSQL_DATABASE" ]; then
        echo "CREATE DATABASE IF NOT EXISTS \`$MYSQL_DATABASE\` ;" | "${mysql[@]}"
        mysql+=( "$MYSQL_DATABASE" )
    fi


    if [ "$MYSQL_USER" -a "$MYSQL_PASSWORD" ]; then
        echo "CREATE USER '$MYSQL_USER'@'%' IDENTIFIED BY '$MYSQL_PASSWORD' ;" | "${mysql[@]}"

        if [ "$MYSQL_DATABASE" ]; then
            echo "GRANT ALL ON \`$MYSQL_DATABASE\`.* TO '$MYSQL_USER'@'%' ;" | "${mysql[@]}"
        fi
    fi

    echo
    for f in /docker-entrypoint-initdb.d/*; do
        case "$f" in
            *.sh)     echo "$0: running $f"; . "$f" ;;
            *.sql)    echo "$0: running $f"; "${mysql[@]}" < "$f"; echo ;;
            *.sql.gz) echo "$0: running $f"; gunzip -c "$f" | "${mysql[@]}"; echo ;;
            *)        echo "$0: ignoring $f" ;;
        esac
        echo
    done

    if ! kill -s TERM "$pid" || ! wait "$pid"; then
        echo >&2 'MySQL init process failed.'
        exit 1
    fi

    echo
    echo 'MySQL init process done. Ready for start up.'
    echo
    echo 
fi
