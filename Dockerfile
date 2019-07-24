FROM node:alpine

# create app directory
RUN mkdir /home/node/app && chown -R node:node /home/node/app

# set app directory
WORKDIR /home/node/app

# app dependencies
COPY package*.json ./

# install dependencies
RUN npm install

# bundle app source
COPY --chown=node:node . .

EXPOSE 5701

CMD ["npm", "start"]
