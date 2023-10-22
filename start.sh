#!/bin/sh

# Start the WebSocket server
deno run --allow-env --allow-net websocket.ts &

# Start the web server
deno run --allow-read --allow-env --allow-net main.ts

