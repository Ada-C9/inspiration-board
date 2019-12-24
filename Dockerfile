# base image
FROM node:9.6.1

# set working directory
RUN mkdir /usr/inspiration-board
WORKDIR /usr/inspiration-board

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/inspiration-board/node_modules/.bin:$PATH

# install and cache app dependencies
COPY .  /usr/inspiration-board
#COPY package.json /usr/src/app/package.json


RUN npm install --silent
RUN npm install react-scripts@1.1.1 -g --silent

# start app
CMD ["npm", "start"]
