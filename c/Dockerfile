# Dockerfile for React App (Built using Vite)
# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and install dependencies
COPY package*.json /app/

# Install the dependencies
RUN npm install

# Copy the rest of the application code
COPY . /app

# Build the app for production
RUN npm run build

# Serve the React app using an nginx server
FROM nginx:alpine
COPY --from=0 /app/dist /usr/share/nginx/html

# Expose port 8000
EXPOSE 8000

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]