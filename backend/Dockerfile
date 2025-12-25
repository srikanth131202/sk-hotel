# Step 1: Use Node image
FROM node:18-alpine

# Step 2: Create app directory
WORKDIR /app

# Step 3: Copy package files
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy source code
COPY . .

# Step 6: Expose port
EXPOSE 3000

# Step 7: Start app
CMD ["npm", "start"]
