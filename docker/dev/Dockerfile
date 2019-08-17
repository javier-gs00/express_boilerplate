FROM node:10.16.0-alpine
WORKDIR /app
COPY package.json yarn.lock babel.config.js tsconfig.json ./
RUN yarn
COPY src /app/src
EXPOSE 8000