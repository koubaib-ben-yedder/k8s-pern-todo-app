FROM node
WORKDIR server
COPY package.json .
RUN npm i
COPY . .
CMD ["npm","run","ts-dev"]

