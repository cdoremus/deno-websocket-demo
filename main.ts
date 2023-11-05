Deno.serve({
  port: Deno.env.get("IS_PROD") ? 80 : 8080,
  handler: async (request: Request) => {
    const { pathname } = new URL(request.url);
    // If the request is a websocket upgrade,
    if (pathname.includes("/ws")) {
      console.log("WEBSOCKET REQUEST");
      // we need to use the Deno.upgradeWebSocket helper
      if (request.headers.get("upgrade") === "websocket") {
        const { socket, response } = Deno.upgradeWebSocket(request);

        socket.onopen = () => {
          console.log("CONNECTED");
        };
        socket.onmessage = (event) => {
          console.log(`RECEIVED: ${event.data}`);
          socket.send("pong");
        };
        socket.onclose = () => console.log("DISCONNECTED");
        socket.onerror = (error) => console.error("ERROR:", error);

        return response;
      } else {
        // If the request is a normal HTTP request,
        // we serve the client HTML file.
        // const file = await Deno.open("./index.html", { read: true });
        return new Response("Websocket is not working");
      }
    } else {
      // If the request is a normal HTTP request,
      // we serve the client HTML file.
      console.log("WEBSERVER REQUEST");
      const file = await Deno.open("./index.html", { read: true });
      return new Response(file.readable);
    }
  },
});
