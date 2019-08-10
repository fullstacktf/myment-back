FROM mongo
COPY ./init-database.js /docker-entrypoint-initdb.d/