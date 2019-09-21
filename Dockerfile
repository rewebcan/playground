FROM node:12

WORKDIR /usr/src/app

COPY package*.json ./

#we can use npm ci --production on production stage
RUN npm install

COPY . .

RUN npm run build-ts

EXPOSE 4000

CMD ["node", "./dist/app.js"]

