# pull official base image
FROM node:14.15.0-alpine

# set working directory
WORKDIR /app

# install app dependencies
COPY ../package.json ./
RUN yarn install

# add app
COPY . .

# start app
CMD ["yarn", "start"]