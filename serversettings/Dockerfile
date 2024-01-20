# Use the latest NGINX image as the base
FROM nginx:latest

RUN apt update

# Install the Apache2 Utilities
RUN apt install -y apache2-utils

# Use htpasswd to create a password file with credentials
# for a user named "robots" with the password "123456"
RUN htpasswd -b -c /etc/nginx/passwords robots 123456

#RUN echo 'INDEX' > /var/www/index.html

# Copy the binaryville NGINX configuration into the container as
# the default configuration.
COPY ./server.conf /etc/nginx/conf.d/default.conf

