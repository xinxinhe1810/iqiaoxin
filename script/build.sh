#!/bin/sh

git pull origin master

yarn install --frozen-lockfile

yarn build

pm2 restart iqiaoxin