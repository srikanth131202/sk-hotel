# Step 1: Use nginx web server
FROM nginx:alpine

# Step 2: Remove default nginx files
RUN rm -rf /usr/share/nginx/html/*

# Step 3: Copy frontend files to nginx
COPY . /usr/share/nginx/html/

# Step 4: Expose port 80
EXPOSE 80
