FROM mariadb:10.4 as database
LABEL Delirial elarcadeldelirio@gmail.com
LABEL version="1.0"
LABEL description="API backend for testing and developed on Node+Express+Mongo. "
RUN apt-get update 
RUN apt-get install nodejs npm -y
RUN node -v && npm -v
ENV MYSQL_ROOT_PASSWORD=1234
WORKDIR /app
COPY . .
RUN npm i
EXPOSE 5000
EXPOSE 3306
CMD ["npm","run","start"]

