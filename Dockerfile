FROM node:10 AS build
MAINTAINER Niek Palm <dev.npalm@gmail.com>

WORKDIR /app
ADD . /app
RUN rm -rf node_modules
RUN npm install -g yarn@1.15.2
RUN yarn && yarn build


FROM nginx:1.15.3
RUN rm -rf /usr/share/nginx/html
COPY --from=build /app/public /usr/share/nginx/html

COPY nginx/default.conf /etc/nginx/conf.d/mysite.template
COPY nginx/start.sh /usr/bin

CMD ["start.sh"]