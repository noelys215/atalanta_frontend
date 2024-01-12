FROM --platform=linux/amd64 node:16-alpine

ENV NODE_ENV=production

WORKDIR /app

RUN npm install 

COPY . .

RUN npm run build 

EXPOSE 3000

CMD [ "npm", "start" ]