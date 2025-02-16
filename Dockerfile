FROM node:lts-alpine

RUN adduser -D swagger-api

ARG PORT_SERVER=8080
ENV PORT $PORT_SERVER

ARG API_PORT=8080
ENV API_PORT=${API_PORT}

EXPOSE $PORT

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g nodemon && npm install

COPY --chown=swagger-api . .

USER swagger-api

CMD ["npm", "run", "dev"]
