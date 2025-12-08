// DEFINITION:
// Currying is a functional programming technique where a function with multiple arguments
// is transformed into a sequence of functions, each taking a single argument.
// Instead of: function(a, b, c) -> we get: function(a)(b)(c)

// BENEFITS OF CURRYING:
// 1. Reusability - Create specialized functions from general ones
// 2. Partial Application - Fix some arguments and reuse the function
// 3. Function Composition - Easier to compose functions together
// 4. Better Code Organization - More modular and maintainable code

// This is a regular function that takes all 3 parameters at once
// function autoMailer(to, sub, body) {
//   console.log(
//     `mail has been sent to ${to} with subject ${sub} and body ${body}`
//   );
// }

// PROBLEM: We must provide all arguments at once
// autoMailer("abc@gmail.com", "order cnf", "body text");

// If we want to send multiple emails to the same person with different subjects,
// we have to repeat the email address every time - not very efficient!

// This is the CURRIED version of the same function
// Each function takes ONE parameter and returns another function
function autoMailer(to) {
  // First function: takes 'to' (email address) and returns a new function
  return function (sub) {
    // Second function: takes 'sub' (subject) and returns another function
    return function (body) {
      // Third function: takes 'body' and executes the final logic
      console.log(
        `mail has been sent to ${to} with subject ${sub} and body ${body}`
      );
    };
  };
}

// HOW TO CALL A CURRIED FUNCTION:
// We call it with one argument at a time using multiple parentheses
autoMailer("abc@gmail.com")("cnfrm mail")("i phone");

// We can create specialized functions by fixing some arguments:

// Create a function that always sends to a specific email
const sendToABC = autoMailer("abc@gmail.com");
// Now sendToABC is a function waiting for subject and body

// Create a function with both email and subject fixed
const sendOrderConfirmation =
  autoMailer("customer@gmail.com")("Order Confirmation");
// Now sendOrderConfirmation only needs the body

// Use the specialized functions:
// sendToABC("Welcome")("Thank you for signing up!");
// sendToABC("Newsletter")("Here's this week's update");
// sendOrderConfirmation("Your order #12345 has been shipped!");

// 1. Currying transforms: f(a, b, c) into f(a)(b)(c)
// 2. Each function takes exactly ONE argument
// 3. Each function returns another function (except the last one)
// 4. Useful for creating reusable, specialized functions
// 5. Makes code more modular and easier to compose
