FROM --platform=linux/amd64 node:20 as build

ENV npm_config_target_platform=linux
ENV npm_config_target_arch=x64
ENV npm_config_cache=/tmp/.npm

WORKDIR /app

COPY package*.json ./

RUN npm ci --legacy-peer-deps --target_arch=x64 --target_platform=linux

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

COPY ./compose/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
