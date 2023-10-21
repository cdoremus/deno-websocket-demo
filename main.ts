Deno.serve({
  port: 8000,
  handler: async (request) => {
    // If the request is a normal HTTP request,
    // we serve the client HTML file.
    const file = await Deno.open("./index.html", { read: true });
    return new Response(file.readable);
  },
});
