import fs from "fs";

/**
 * Node.js File System (fs) Module
 *
 * The 'fs' module allows you to work with the file system on your computer.
 * Common uses for the File System module:
 * 1. Read files
 * 2. Create files
 * 3. Update files
 * 4. Delete files
 * 5. Rename files
 */

// ---------------------------------------------------------
// 1. CREATE / WRITE FILES
// ---------------------------------------------------------

// Synchronous Write: Creates a new file if it doesn't exist, or overwrites if it does.
// fs.writeFileSync(path, data, options)
console.log("Creating file synchronously...");
fs.writeFileSync(
  "./notes.txt",
  "This is some initial content created synchronously."
);

// Asynchronous Write: Non-blocking way to create or overwrite a file.
// fs.writeFile(path, data, callback)
fs.writeFile(
  "./async_notes.txt",
  "This content was created asynchronously.",
  (err) => {
    if (err) {
      console.error("Error creating file:", err);
    } else {
      console.log("Async file created successfully!");
    }
  }
);

// ---------------------------------------------------------
// 2. READ FILES
// ---------------------------------------------------------

// Synchronous Read: Blocks execution until the file is read.
// fs.readFileSync(path, encoding)
console.log("Reading file synchronously...");
const syncData = fs.readFileSync("./notes.txt", "utf-8");
console.log("Sync Content:", syncData);

// Asynchronous Read: Non-blocking way to read a file.
// fs.readFile(path, encoding, callback)
fs.readFile("./async_notes.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
  } else {
    console.log("Async Content:", data);
  }
});

// ---------------------------------------------------------
// 3. UPDATE FILES (Append Content)
// ---------------------------------------------------------

// Synchronous Append: Adds content to the end of the file.
fs.appendFileSync("./notes.txt", "\nThis is appended content (Sync).");

// Asynchronous Append: Non-blocking append.
fs.appendFile(
  "./async_notes.txt",
  "\nThis is appended content (Async).",
  (err) => {
    if (err) console.error("Error appending:", err);
    else console.log("Content appended successfully!");
  }
);

// ---------------------------------------------------------
// 4. DELETE FILES
// ---------------------------------------------------------

// Unlink (Delete) a file synchronously
// fs.unlinkSync("./some_file.txt");

// Unlink (Delete) a file asynchronously
// fs.unlink("./async_notes.txt", (err) => {
//     if (err) console.error("Error deleting:", err);
//     else console.log("File deleted!");
// });

// ---------------------------------------------------------
// 5. FILE INFORMATION & DIRECTORIES
// ---------------------------------------------------------

// Check if a file exists
if (fs.existsSync("./notes.txt")) {
  console.log("notes.txt exists!");
}

// Get file stats
const stats = fs.statSync("./notes.txt");
console.log("File size:", stats.size, "bytes");
