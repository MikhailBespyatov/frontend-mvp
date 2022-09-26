FROM node:16-alpine as builder
WORKDIR /srv
COPY . /srv/
RUN apk add git
RUN export=REACT_APP_VERSION=$(git describe --always)
ENV PUBLIC_URL=/scoring
ENV CI=false
RUN yarn install --network-timeout 100000 --non-interactive --pure-lockfile
RUN yarn run build
FROM nginx:1.14
COPY --from=builder /srv/build/ /app/
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080/tcp
