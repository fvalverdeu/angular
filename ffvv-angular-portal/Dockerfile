FROM node:alpine AS build

RUN apk update && \
    apk upgrade && \
    apk add ca-certificates && \
    apk add python && \
    apk add make && \
    apk add g++ && \
    apk add yarn && \
    apk add --update bash && \
    npm i -g @angular/cli

ADD package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /app && cp -a /tmp/node_modules /app/

WORKDIR /app
ADD . /app

RUN yarn build

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html
COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
