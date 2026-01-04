/**
 * Using Third-Party Modules: figlet.js
 *
 * This file demonstrates how to use a package installed via npm (figlet).
 * Figlet is used to create ASCII art from text.
 */

// 1. Importing the third-party module
import figlet from "figlet";

/**
 * 2. Basic Usage
 *
 * figlet(text, [options], callback)
 *
 * Because it's a third-party module, it often uses callbacks or
 * promises for operations that might take time.
 */

console.log("Generating ASCII Art...");

figlet("MERN-17", (err, data) => {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  // Print the beautiful ASCII art to the terminal
  console.log(data);
});

/**
 * How to use npm packages:
 * 1. Initialize npm: npm init -y
 * 2. Install package: npm install figlet
 * 3. Import and use as shown above.
 */
