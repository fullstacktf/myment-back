#!/bin/sh   
set -e

if [[ $(id -u) = 0 ]]; then
	mysql_install_db --user=mysql --datadir=${DB_DATA_PATH}
    echo
    echo 'Initializate express app'
    echo
    npm i --only=prod --loglevel=verbose
fi
exec "$@"