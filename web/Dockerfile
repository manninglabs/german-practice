FROM node:6.9-alpine

MAINTAINER Nick Manning <nicholas.manning@gmail.com>

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app

RUN npm install

EXPOSE 5000

CMD npm start
