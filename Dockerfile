FROM node:18 AS builder

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . /usr/src/app/
RUN npm install -g ember
RUN npm run build

FROM nginx:latest

COPY --from=builder /usr/src/app/dist /usr/share/nginx/html
COPY --from=builder /usr/src/app/default.conf /etc/nginx/conf.d/default.conf