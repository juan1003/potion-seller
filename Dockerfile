FROM node

WORKDIR /app

RUN npm i -g pnpm

COPY package.json pnpm-lock.yaml /app/

RUN pnpm install

COPY . /app/

RUN pnpm build

CMD [ "pnpm", "start" ]