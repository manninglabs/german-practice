#!/bin/sh
go build && \
    API_VERSION=0.0.1 \
    DB_HOST=localhost \
    DB_NAME=germanpractice \
    DB_PASSWORD=1234 \
    ./german-practice
