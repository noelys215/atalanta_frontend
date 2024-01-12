# Step 1: Base Image
FROM node:latest

# ENV NODE_ENV=production


# Step 2: Set Working Directory
WORKDIR /app

# Step 3: Install Dependencies
COPY package*.json ./
RUN npm install

# Step 4: Copy Source Code
COPY . .

# Step 5: Build the Application
RUN npm run build

# Step 6: Start Command
CMD ["npm", "start"]