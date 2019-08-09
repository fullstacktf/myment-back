FROM node:10-alpine as express
LABEL Delirial elarcadeldelirio@gmail.com
LABEL version="1.0"
LABEL description="API backend for testing and developed on Node+Express+Mariadb. "
RUN apk update --progress 
RUN apk add -vv --progress mariadb mariadb-client
ENV DB_DATA_PATH="/var/lib/mysql"
ENV DB_ROOT_PASS="010495a"
ENV DB_USER="mariadb_user"
ENV DB_PASS="mariadb_user_password"
ENV MAX_ALLOWED_PACKET="200M"
ENV MYSQL_ROOT_PASSWORD=010495a
RUN ls /bin
ENV BASH_SOURCE=/usr/local/bin
COPY config/config-file.cnf /etc/mysql/my.cnf
RUN apk add openrc --no-cache
# #TODO: Add user to npm install 
# RUN addgroup --gid "$NODE_GID" "$NODE_USER" \
#     && adduser \
#     --disabled-password \
#     --gecos "" \
#     --home /home/node \
#     --ingroup "$NODE_USER" \
#     --no-create-home \
#     --uid "$NODE_UID" \
#     "$NODE_USER"

# Overwrite the default entrypoint of mariadb:10.4
COPY init-docker.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/init-docker.sh
ENTRYPOINT ["/usr/local/bin/init-docker.sh"]
# Initializing a fresh instance
COPY db1-myment-backup-2019-07-29.sql /init-docker-initdb.d/db1-myment-backup-2019-07-29.sql
WORKDIR /app
COPY . .
RUN chmod +x init-database.sh
# Change the permissions for security
COPY ./config/config-file.cnf /etc/mysql/conf.d
VOLUME ./data:/var/lib/mysql
EXPOSE 5000
CMD ["mysqld_safe"]

