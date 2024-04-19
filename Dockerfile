# Getting alpine version of node   
FROM node:lts-alpine
# Installing https://www.npmjs.com/package/http-server
RUN npm install -g http-server
# Creating app/
WORKDIR /app
# Copying compiled files
COPY dist/ .
# Exposing port 8080
EXPOSE 8080
CMD ["http-server"]