FROM node:20.18.0-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

ENV PATH /app/node_modules/.bin:$PATH

COPY . .

# ARG to pass the environment variable (default: production)
ARG BUILD_ENV=production     

# Set environment variable for Vite to use
ENV VITE_ENV=$BUILD_ENV

RUN npm run build

FROM nginx:1.27.2-alpine3.20

# Copy the built app from the previous stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy nginx configuration file if you have custom configuration
COPY ./nginx.conf /etc/nginx/nginx.conf

# Expose the port that the app runs on (default nginx port)
EXPOSE 80


ENTRYPOINT ["nginx","-g","daemon off;"]

# docker build --build-arg BUILD_ENV=staging -t moviefy:staging .
