FROM node:latest
WORKDIR /srv/app
COPY package*.json ./
RUN npm install
RUN npm install -g ts-node
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["ts-node", "index.ts"]