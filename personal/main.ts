Deno.serve(async (req) => {
  console.log("Method:", req.method);

  const url = new URL(req.url);
  console.log("Path:", url.pathname);
  switch (url.pathname) {
    case "/":
      const htmlBody = await Deno.readTextFile("index.html");
      return new Response(htmlBody, {
        headers: {
          "Content-Type": "text/html",
        },
        status: 200,
      });
  
    case "/styles.css":
      const cssBody = await Deno.readTextFile("styles.css");
      return new Response(cssBody, {
        headers: {
          "Content-Type": "text/css",
        },
        status: 200,
      });
  
    default:
      return new Response("Not found", {
        status: 404,
      });
  }
  return new Response("Hello, World!");
});