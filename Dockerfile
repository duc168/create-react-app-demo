FROM node:14 as build-stage
LABEL authors="Duc Tran"
WORKDIR /source
COPY . .
RUN yarn
RUN yarn prod

FROM nginx:1.18
LABEL authors="Duc Tran"
COPY --from=build-stage /source/dist /usr/share/nginx/html
COPY ./nginx/configure /etc/nginx/conf.d/default.conf
EXPOSE 8080