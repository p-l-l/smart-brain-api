FROM node:12.19.1

# This is the directory in the container that we wanna work out of.
WORKDIR /usr/src/smart-brain-api

# Copy everything from root where the Dockerfile is TO the root of the Working directory
COPY ./ ./

# What command we want to run
RUN npm install

# DockerFile can only have one command, usually at end of file.
CMD ["/bin/bash"]