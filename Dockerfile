FROM mongo:latest
ENV MONGO_INITDB_ROOT_USERNAME wizard
ENV MONGO_INITDB_ROOT_PASSWORD 1234
ENV MONGO_INITDB_DATABASE myment
COPY ./init-database.js /docker-entrypoint-initdb.d/init-database.js
EXPOSE 27017
