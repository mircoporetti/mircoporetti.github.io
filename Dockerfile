#Build Stage Start

#Specify a base image
FROM node:13.12.0 as builder

#Specify a working directory
WORKDIR '/app'

#Copy the dependencies file
COPY package*.json /app/

#Install dependencies
# --production -> skip the devDependencies
RUN npm install --production

#Copy remaining files
COPY . .

ARG ENV
ENV REACT_APP_ENVIRONMENT=$ENV

COPY ./config/$ENV/.env /app/

#Build the project for production
RUN npm run build

#Run Stage Start
FROM nginx:1.17.9-alpine

#Copy production build files from builder phase to nginx
COPY --from=builder /app/build /var/www

ARG ENV
COPY ./config/$ENV/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
ENTRYPOINT ["nginx","-g","daemon off;"]
