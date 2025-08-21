FROM node:lts-alpine AS base

WORKDIR /build
COPY package*.json .
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine AS final

WORKDIR /usr/share/nginx/html
COPY --from=base /build/dist .
