import http from "http";

/**
 * Advanced Node.js Server: server_using_node.js
 *
 * This file provides a deep dive into the Request (req) and Response (res) objects.
 */

const PORT = 3000;

const server = http.createServer((req, res) => {
  /**
   * =========================================================
   * 1. THE REQUEST OBJECT (req) - Information from the Client
   * =========================================================
   */

  // req.url: The path requested by the client (e.g., "/home", "/about?name=vikas")
  const url = req.url;

  // req.method: The HTTP method (GET, POST, PUT, DELETE, etc.)
  const method = req.method;

  // req.headers: An object containing all incoming request headers
  // Common headers: 'user-agent', 'content-type', 'host', 'authorization'
  const headers = req.headers;

  console.log(`\n--- Incoming Request ---`);
  console.log(`Method: ${method}`);
  console.log(`URL: ${url}`);
  console.log(`Host: ${headers.host}`);
  console.log(`User-Agent: ${headers["user-agent"]}`);

  /**
   * =========================================================
   * 2. THE RESPONSE OBJECT (res) - Sending Data to the Client
   * =========================================================
   */

  // res.setHeader(name, value): Sets a single header value for implicit headers.
  res.setHeader("Content-Type", "text/html");
  res.setHeader("X-Powered-By", "Node.js-Teaching-Module");

  // res.statusCode: Sets the HTTP status code (200 OK, 404 Not Found, 500 Error)
  res.statusCode = 200;

  /**
   * =========================================================
   * 3. HANDLING DIFFERENT ROUTES & METHODS
   * =========================================================
   */

  if (url === "/" && method === "GET") {
    res.write("<h1>Welcome to the Advanced Server</h1>");
    res.write("<p>Check your terminal to see the request logs!</p>");
    res.end(); // Always call end() to send the response
  } else if (url === "/data" && method === "GET") {
    // Sending JSON data
    res.setHeader("Content-Type", "application/json");
    const responseData = {
      message: "This is some JSON data",
      status: "Success",
      requestMethod: method,
    };
    res.end(JSON.stringify(responseData));
  } else if (url === "/login" && method === "POST") {
    // Handling POST data (Body)
    let body = "";

    // Data comes in chunks (Streams)
    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      console.log("Received Body:", body);
      res.end("Data received successfully!");
    });
  } else {
    // 404 Not Found
    res.statusCode = 404;
    res.end("<h1>404: Page Not Found</h1>");
  }
});

server.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
  console.log("Pointers to remember:");
  console.log("1. req.url - path of the request");
  console.log("2. req.method - GET/POST/etc.");
  console.log("3. req.headers - details like browser type, auth tokens");
  console.log("4. res.statusCode - status codes (2xx, 4xx, 5xx)");
  console.log("5. res.setHeader - setting content types or custom headers");
  console.log("6. res.end() - finalizing the response");
});
