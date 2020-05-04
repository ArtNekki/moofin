FROM node:14.1-alpine AS base
WORKDIR /app
EXPOSE 5000

FROM node:14.1-alpine AS build
WORKDIR /app
COPY ./package.json .
RUN npm install
COPY . .
RUN npx ng build --prod

FROM base AS final
WORKDIR /app
COPY --from=build /app/dist/fincase-unicorn-web .
RUN npm install --no-save serve

CMD npx serve /app