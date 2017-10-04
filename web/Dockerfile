FROM node:6.9-alpine

MAINTAINER Nick Manning <nicholas.manning@gmail.com>

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ADD dist /usr/src/app/dist
ADD server.js /usr/src/app/server.js

RUN npm install express connect-history-api-fallback

EXPOSE 5000

CMD node server.js
