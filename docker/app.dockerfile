FROM node:16-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY . ./

RUN apk add --no-cache git
RUN yarn install --silent