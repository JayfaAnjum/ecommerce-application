# Use lightweight Node image
FROM node:20-alpine

WORKDIR /app

# Copy root package.json & package-lock.json
COPY package*.json ./

# Install only backend dependencies
RUN npm install --omit=dev

# Copy backend source code only
COPY backend/ ./backend

# Expose backend port
EXPOSE 8000

# Start the backend
CMD ["node", "backend/server.js"]
