#!/bin/sh

set -e

cd /home/work/us/iqiaoxin

pwd

git pull origin master

yarn install --frozen-lockfile

yarn build

pm2 restart iqiaoxin