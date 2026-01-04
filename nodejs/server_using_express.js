import express from "express";

/**
 * Server using Express: server_using_express.js
 *
 * Express is a minimal and flexible Node.js web application framework
 * that provides a robust set of features for web and mobile applications.
 *
 * Why Express?
 * - Easier Routing
 * - Middleware Support
 * - Built-in Body Parsing
 * - Simplified Response Handling
 */

const app = express();
const PORT = 3000;

// =========================================================
// 1. MIDDLEWARE
// =========================================================

/**
 * Middleware functions are functions that have access to the request object (req),
 * the response object (res), and the next middleware function in the application’s
 * request-response cycle.
 */

// Built-in middleware to parse JSON bodies
app.use(express.json());

// Custom middleware example
app.use((req, res, next) => {
  console.log(`${new Date().toLocaleString()} - [${req.method}] ${req.url}`);
  next(); // Pass control to the next handler
});

// =========================================================
// 2. ROUTING
// =========================================================

/**
 * app.METHOD(PATH, HANDLER)
 * METHOD is an HTTP request method (GET, POST, PUT, DELETE).
 */

// GET Route - Landing Page
app.get("/", (req, res) => {
  // res.send() handles content-type automatically
  res.send("<h1>Welcome to Express Server</h1>");
});

// GET Route - JSON data
app.get("/api/user", (req, res) => {
  // res.json() sends a JSON response
  res.json({
    id: 1,
    name: "Vikas Kumar",
    role: "Instructional Designer",
  });
});

// POST Route - Simple Login/Data receipt
app.post("/api/login", (req, res) => {
  const { username, password } = req.body; // Body is already parsed by express.json()

  if (username === "admin" && password === "1234") {
    res.status(200).send("Login Successful!");
  } else {
    res.status(401).send("Invalid Credentials");
  }
});

/**
 * =========================================================
 * 3. RESPONSE METHODS (Pointers)
 * =========================================================
 * - res.send(): Sends various types of response (HTML, String, Buffer)
 * - res.json(): Sends a JSON response.
 * - res.status(): Sets the HTTP status code (can be chained).
 * - res.sendStatus(): Sets the status code and sends its string representation as the body.
 * - res.redirect(): Redirects a request.
 */

// Handle 404 - Not Found (Should be at the end of all routes)
app.use((req, res) => {
  res.status(404).send("<h1>404: Page Not Found in Express</h1>");
});

app.listen(PORT, () => {
  console.log(`Express Server started at http://localhost:${PORT}`);
  console.log("Pointers for Express:");
  console.log("1. app.use(express.json()) - For body parsing");
  console.log("2. app.get/post/put/delete - For easy routing");
  console.log("3. res.send()/res.json() - For sending data");
  console.log("4. res.status() - For setting HTTP codes (200, 404, 500)");
});
