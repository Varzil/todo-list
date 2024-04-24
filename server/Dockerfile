# Use official Node.js image as the base image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the server application code to container
COPY . .

EXPOSE 8000

# Command to run the server
CMD ["npm", "start"]
