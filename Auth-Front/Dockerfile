# From base image node
FROM node:12

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Copying all the files from your file system to container file system
COPY ./ .

# Install all dependencies
RUN npm install
RUN npm run build


# Expose the port
EXPOSE 3000
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

# Command to run app when intantiate an image
CMD ["npm","start"]

