# Use an official Node.js runtime as a parent image
FROM node:18-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies including sharp
RUN npm install
RUN npm install sharp

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Use another Node.js runtime as the base image for the production environment
FROM node:18-alpine AS production

# Set the working directory in the production image
WORKDIR /app

# Copy the build output and node_modules from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./

# Start the Next.js application
CMD ["npm", "start"]
