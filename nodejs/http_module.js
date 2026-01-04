import http from "http";

/**
 * Node.js HTTP Module
 *
 * The HTTP module can create an HTTP server that listens to server ports
 * and gives a response back to the client.
 */

// Define the port number
const PORT = 3000;

/**
 * 1. Creating the Server
 *
 * http.createServer() takes a callback function as an argument.
 * This callback is executed every time the server receives a request.
 *
 * req (Request): Information about the incoming request (URL, headers, method, etc.)
 * res (Response): Methods to send data back to the client.
 */
const server = http.createServer((req, res) => {
  // Log the request URL and method to the console
  console.log(`Request received: ${req.method} ${req.url}`);

  // Set the response headers (Content-Type tells the browser what kind of data is being sent)
  res.setHeader("Content-Type", "text/plain");

  // ---------------------------------------------------------
  // 2. BASIC ROUTING
  // ---------------------------------------------------------

  // Check the requested URL and send different responses
  if (req.url === "/") {
    res.statusCode = 200; // Success
    res.end("Welcome to the Home Page!");
  } else if (req.url === "/about") {
    res.statusCode = 200;
    res.end("This is the About Us page.");
  } else if (req.url === "/contact") {
    res.statusCode = 200;
    res.end("Contact us at: support@example.com");
  } else {
    // Handle routes that don't exist (404 Not Found)
    res.statusCode = 404;
    res.end("404 Error: Page Not Found");
  }
});

/**
 * 3. Listening for Requests
 *
 * The server.listen() method starts the server and makes it listen for
 * incoming connections on the specified port.
 */
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
  console.log("Press Ctrl+C to stop the server.");
});
