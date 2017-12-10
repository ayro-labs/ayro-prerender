FROM node:carbon-alpine
WORKDIR /usr/src/ayro-prerender
COPY ./package*.json ./
COPY ./.npmrc .npmrc
RUN \
  echo "http://dl-cdn.alpinelinux.org/alpine/edge/community" >> /etc/apk/repositories && \
  echo "http://dl-cdn.alpinelinux.org/alpine/edge/main" >> /etc/apk/repositories && \
  echo "http://dl-cdn.alpinelinux.org/alpine/edge/testing" >> /etc/apk/repositories && \
  apk --no-cache update && \
  apk add --update --no-cache udev ttf-freefont chromium && \
  npm install --production && \
  npm install pm2 -g && \
  rm -rf /var/cache/apk/* /tmp/* && \
  touch config.properties
COPY . .
EXPOSE 4100
CMD ["pm2-docker", "process.json", "--only", "Ayro Prerender"]