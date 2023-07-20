FROM node:18

WORKDIR /usr/src/app

COPY ./*config* ./
COPY package*.json ./
COPY ./src ./src
COPY ./static ./static

RUN npm i
RUN npm run build

EXPOSE 5000

ENV HOST=0.0.0.0

CMD [ "node", "./build/index.js" ]