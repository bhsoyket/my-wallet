FROM node:10-alpine

LABEL maintainer = "BELAYET HOSSAIN"
LABEL email = "2020belayethossain@gmail.com"
LABEL version = "1.0"

WORKDIR /app
VOLUME [ "/app/src" ]
# COPY . ./
# RUN yarn
# RUN yarn build

RUN apk update && apk add yarn

COPY package.json .
RUN yarn

COPY . .
EXPOSE 3000

CMD ["yarn", "start"]