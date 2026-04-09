// 1. Import the built-in HTTP module
const { createServer } = require("node:http");

// 2. Define where the server will live
const hostname = "127.0.0.1"; // Localhost
const port = 3000;

// 3. Create the server
const server = createServer((req, res) => {
  // 'req' is the request from the user
  // 'res' is the response we are sending back

  res.statusCode = 200; // 200 means "OK/Success"
  res.setHeader("Content-Type", "text/plain"); // We are sending plain text

  // Close the response and send the text payload
  res.end("Hello World");
});

// 4. Tell the server to start listening for traffic
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
