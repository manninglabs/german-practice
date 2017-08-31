#!/usr/bin/env bash

yarn run build
cp package.json.prod dist/package.json
#cd dist && git subtree push --prefix dist heroku master