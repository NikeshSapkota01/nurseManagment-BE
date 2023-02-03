# base image (where there is node npm and yarn)
# layer 1
FROM node:16-alpine

# mkdir app
# cd app
# layer 2
WORKDIR /app 

# app/package.json
# app/yarn.lock
# copu in the current directory which we have set to app
COPY ["package.json", "yarn.lock", "./"]

# app/node_modules (aloways go inside docker image and run)
RUN yarn 

# app/README.md
# app/src
# app/*
# all not in .dockerignore
COPY . .

# if we want to run a docker image this is the command that is run by default
# since i am running in development mode to run the appliation we need yarn dev
CMD [ "yarn", "dev" ]


