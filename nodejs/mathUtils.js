/**
 * Custom Module: mathUtils.js
 *
 * This file demonstrates how to export functions and variables
 * from a custom module in Node.js (using ES Modules).
 */

// 1. Named Export: Exporting specific functions
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

// 2. Exporting a constant
export const PI = 3.14159;

// 3. Default Export: An object containing multiple functions
// Note: A file can have multiple named exports but only ONE default export.
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

export default {
  multiply,
  divide,
};
