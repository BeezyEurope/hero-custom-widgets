FROM node:12-alpine as front-build

WORKDIR /app

COPY ./package.json .

COPY ./packages/client/package.json .

RUN yarn install

COPY . .

WORKDIR /app/packages/client

RUN echo API_URL=/api > .env

RUN yarn run build


FROM node:12-alpine as server

WORKDIR /app

ARG TWITTER_CONSUMER_KEY

ENV TWITTER_CONSUMER_KEY=${TWITTER_CONSUMER_KEY}

ARG TWITTER_CONSUMER_SECRET

ENV TWITTER_CONSUMER_SECRET=${TWITTER_CONSUMER_SECRET}

ARG TWITTER_BEARER_TOKEN
ENV TWITTER_BEARER_TOKEN=${TWITTER_BEARER_TOKEN}

ARG FB_TOKEN
ENV FB_TOKEN=${FB_TOKEN}

COPY package.json .

COPY ./packages/server/package.json .

RUN yarn install

COPY . .

WORKDIR /app/packages/server

RUN yarn run build

COPY --from=front-build /app/packages/client/dist /app/packages/server/client/dist


CMD ["node", "./build/index.js"]




