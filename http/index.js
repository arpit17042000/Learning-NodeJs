const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  const data = fs.readFileSync("./userAPI/userAPI.json", "utf8");
  if (req.url == "/") {
    res.end("Home");
  } else if (req.url == "/About") {
    res.end("/About");
  } else if (req.url == "/API") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(data);
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("<h1>404 error page not found</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listening to port 8000");
});
