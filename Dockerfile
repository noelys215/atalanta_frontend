FROM node:lts-alpine

ENV NODE_ENV=production

WORKDIR /app

COPY . .

RUN npm install 

RUN npm run build 

EXPOSE 3000

CMD [ "npm", "start" ]