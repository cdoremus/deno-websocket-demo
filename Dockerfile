# To build: docker build -t deno-websocket-app .
# To run: docker run -p 8000:8000 -p 8080:8080  deno-websocket-app

# Use the official Deno image
FROM denoland/deno

# Set the working directory within the container
WORKDIR /app

# Copy your Deno application code into the container
COPY . /app

# Allow network access to the specified ports
# Port for the web server
EXPOSE 8000
# Port for the WebSocket server
EXPOSE 8080

# Make the start.sh script executable
RUN chmod +x /app/start.sh

# Set the entry point as the shell script
CMD ["sh", "start.sh"]
