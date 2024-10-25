FROM node:22.10.0-bullseye
WORKDIR /app
COPY . .
CMD [ "npm","run","start" ]