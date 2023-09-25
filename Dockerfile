FROM node:14-alpine3.16

RUN apk update && apk add nano

WORKDIR /app

COPY package.json ./

RUN npm install 
RUN npm install -g @nestjs/cli@9.0.0

COPY . .

RUN npm run build

COPY ./docker/production.env .env

EXPOSE 3000

CMD ["npm", "run" , "start"]