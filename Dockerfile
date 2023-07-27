# It will install node.js with latest version
FROM node:latest

# It's setting the working directory to a specific location inside the container
WORKDIR /app

# Copying all the files from local source location to a specific container inside docker
COPY . .

# It will install all the depedencies that needed from package.json
RUN npm install 

# It will execute the Docker image specified by following command
CMD ["node", "./bin/www"]