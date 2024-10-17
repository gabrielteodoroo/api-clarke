FROM node:18

WORKDIR /usr/src

COPY package*.json ./

RUN npm install

COPY prisma ./prisma
COPY . .

RUN npx prisma generate

RUN npm run build

EXPOSE 3000

CMD ["node", "dist/main"]
