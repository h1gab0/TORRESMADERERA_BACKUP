FROM alpine:latest AS deps
RUN apk --no-cache add expect

# Copy dependencies from the temporary container
FROM mysql:8.0.29-debian AS app
COPY --from=deps /usr/bin/expect /usr/bin/expect

# Configure database and security
RUN apt-get update && apt-get install -y --no-install-recommends \
  expect

# Disable lowercase table names (optional, adjust based on your needs)
RUN echo "lower_case_table_names=0" >> /etc/mysql/my.cnf

# Use mysql_native_password plugin
RUN echo "[mysqld]" >> /etc/mysql/my.cnf
RUN echo "plugin_load_add = mysql_native_password" >> /etc/mysql/my.cnf

# Create script for setting up user and database
COPY setup.sql .

ENTRYPOINT ["docker-entrypoint.sh", "/docker-entrypoint-initdb.d/setup.sql"]
