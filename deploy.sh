#!/usr/bin/env bash

NODE_ENV=production yarn run build
git push heroku master --force
