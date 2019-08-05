FROM node:10:alpine
WORKDIR /usr/src/app
COPY package*.json ./
LABEL version="1.0"
LABEL description="API backend for testing \
and developed on Node+Express+Mongo. \
--- Postgresql Stack ----"
FROM postgresql:alpine


