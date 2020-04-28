# Install Node image
FROM node:12.16.2-alpine as client

# Working directory inside container
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

# Copy over the package.json files
COPY ./package*.json /app/

# Install dependencies
RUN npm install -silent

RUN npm install react-scripts -g -silent

# Copy everything
COPY . .

EXPOSE 3000

# Run the application
CMD ["npm", "start"]