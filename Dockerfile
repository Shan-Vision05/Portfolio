# Use nginx alpine
FROM nginx:alpine

# Custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Clean html dir first
RUN rm -rf /usr/share/nginx/html/*

# Copy EVERYTHING in one layer
COPY . /usr/share/nginx/html/

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
