FROM node:18 as build
WORKDIR /app
#COPY package*.json ./
COPY *.json ./
RUN npm install
COPY ./src ./src
RUN npm install -g @angular/cli
RUN ng build --configuration production

# Use an official Nginx image as the base image
FROM nginx
# Copy the built Angular app to the appropriate location in the container
COPY --from=build /app/dist/shop /usr/share/nginx/html
# Expose port 80 for the Nginx server
EXPOSE 80
# Start the Nginx server when the container starts
CMD ["nginx", "-g", "daemon off;"]