FROM node:alpine

# create app directory
WORKDIR /usr/src/app

# app dependencies
COPY package*.json ./

# install dependencies
RUN npm install

# bundle app source
COPY . .

EXPOSE 5701

CMD ["npm", "start"]
