import express from "express";

/**
 * Express Middleware: middleware.js
 *
 * Middleware functions are functions that have access to the request object (req),
 * the response object (res), and the next function in the application’s request-response cycle.
 *
 * Middleware can:
 * 1. Execute any code.
 * 2. Make changes to the request and the response objects.
 * 3. End the request-response cycle.
 * 4. Call the next middleware in the stack.
 */

const app = express();
const PORT = 3000;

// =========================================================
// 1. CUSTOM LOGGER MIDDLEWARE (Application-level)
// =========================================================

/**
 * A logger middleware tracks incoming requests.
 * It's common to log the method, URL, and time.
 */
const myLogger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().toISOString();

  console.log(`[LOGGER] ${time} : ${method} request to ${url}`);

  // IMPORTANT: Always call next() to pass the request to the next function.
  // If you don't call next(), the request will be left hanging!
  next();
};

// Apply the middleware to all routes
app.use(myLogger);

// =========================================================
// 2. DATA ENHANCEMENT MIDDLEWARE
// =========================================================

/**
 * Middleware can also add data to the 'req' object so it's
 * available in all subsequent route handlers.
 */
app.use((req, res, next) => {
  req.requestTime = Date.now();
  req.customNote = "Middleware was here!";
  next();
});

// =========================================================
// 3. ROUTE HANDLERS
// =========================================================

app.get("/", (req, res) => {
  res.send(`
        <h1>Middleware Demo</h1>
        <p>Request Time: ${req.requestTime}</p>
        <p>Custom Note: ${req.customNote}</p>
        <p>Check your terminal to see the Logs!</p>
    `);
});

app.get("/about", (req, res) => {
  res.json({
    page: "About",
    time: req.requestTime,
    note: req.customNote,
  });
});

// =========================================================
// 4. TYPES OF MIDDLEWARE (Notes)
// =========================================================
/**
 * 1. Application-level: app.use() or app.METHOD()
 * 2. Router-level: router.use() using express.Router()
 * 3. Error-handling: Takes 4 arguments (err, req, res, next)
 * 4. Built-in: express.json(), express.static(), express.urlencoded()
 * 5. Third-party: cookie-parser, morgan, cors (installed via npm)
 */

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log("Try visiting / and /about to see the logger in action.");
});
