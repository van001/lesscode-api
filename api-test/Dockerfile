FROM node:12-alpine

# Create app directory
WORKDIR /usr/src/app

COPY *.json ./

RUN npm install  --production

# Bundle app source
COPY . .

CMD [ "node", "index.js" ]
