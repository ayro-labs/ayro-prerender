FROM keymetrics/pm2:8-alpine
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
  rm -rf /var/cache/apk/* /tmp/* && \
  touch config.yml
COPY . .
EXPOSE 4100