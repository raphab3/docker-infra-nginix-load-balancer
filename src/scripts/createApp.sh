#!/bin/sh

npm install && npm cache clean --force --loglevel=error
npm run start:prod