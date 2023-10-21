<!-- deno-fmt-ignore-file -->

# Deno Websocket Demo

This is based on MDN Deno Websocket example: https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_a_WebSocket_server_in_JavaScript_Deno . This example uses port 80, which throws a permission error due to the fact that port 80 is closed on my machine.

Instead, I used port 8000. And changed the `port` value in the `Deno.serve` call in `main.ts` and added `:8000` to the `wsUri` value in `index.html`.

The app works by opening a websocket connection when the `index,html` file is rendered and sending a message with the string `ping` every 5 seconds. When the server receives the message, it immediately response with the string `pong`. This ping-pong message exchange continues to happen every 5 seconds until the browser window is closed.

To run this example use this command line:

```sh
deno task dev
```
The app should then be available at https://localhost:8000