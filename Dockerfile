FROM alpine

MAINTAINER Nick Manning <nicholas.manning@gmail.com>

ADD app /app

EXPOSE 8080

ENTRYPOINT ["/app"]