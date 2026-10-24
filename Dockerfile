# node image to build and serve the react app
FROM node:22-alpine

# this is the workdir the assignment asks for
WORKDIR /singh_karanpreet_ui_garden

# copy package files first and install
COPY package*.json ./
RUN npm install

# copy the rest of the project
COPY . .

# make the production build (goes into the build folder)
RUN npm run build

# small server to host the build folder
RUN npm install -g serve

# site runs on port 8083
EXPOSE 8083

CMD ["serve", "-s", "build", "-l", "8083"]
