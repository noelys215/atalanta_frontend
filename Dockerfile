FROM --platform=linux/amd64 node:16-alpine

ENV NODE_ENV=production

WORKDIR /app

COPY package*.json ./

RUN npm install 

RUN npm run build 

EXPOSE 3000

CMD [ "npm", "start" ]