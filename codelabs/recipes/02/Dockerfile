# Use the official Node.js image.
# Node 26 is the Active LTS and is patched for CVE-2026-111497 (Brotli); Node 18, 20 and 25 are EOL.
FROM node:26

# Set the working directory inside the container
WORKDIR /app

# Copy package files (if needed) and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port your app runs on
EXPOSE 5006

# Start the app
CMD ["node", "index.js"]