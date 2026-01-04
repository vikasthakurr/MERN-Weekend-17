/**
 * Custom Module Implementation: custommodule.js
 *
 * This file demonstrates how to import functions and variables
 * from another local file (mathUtils.js) using ES Modules.
 */

// 1. Importing Named Exports
// Note: When importing local files in ESM, we MUST include the file extension (.js)
import { add, subtract, PI } from "./mathUtils.js";

// 2. Importing the Default Export
import mathCore from "./mathUtils.js";

console.log("--- Custom Module Demo ---");

// Using named exports
console.log("Adding 5 + 3 =", add(5, 3));
console.log("Subtracting 10 - 4 =", subtract(10, 4));
console.log("Value of PI is:", PI);

// Using default export
console.log("Multiplying 6 * 7 =", mathCore.multiply(6, 7));
console.log("Dividing 20 / 4 =", mathCore.divide(20, 4));

/**
 * Summary of Module Syntax:
 *
 * Exporting:
 * - export const x = 10; (Named)
 * - export default x;    (Default)
 *
 * Importing:
 * - import { x } from "./file.js"; (Named)
 * - import x from "./file.js";      (Default)
 */
