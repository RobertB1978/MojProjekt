FROM node:18-alpine

WORKDIR /aplikacja

COPY . .

RUN npm install

CMD ["node", "aplikacja.js"]

EXPOSE 3000
