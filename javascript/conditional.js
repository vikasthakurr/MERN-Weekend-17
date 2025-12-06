// 1. IF STATEMENT
// ----------------------------------------------------------------------------
// Definition: Executes a block of code if a specified condition is true

let age = 18;

if (age >= 18) {
  console.log("You are an adult");
}

// Example 2
let temperature = 30;

if (temperature > 25) {
  console.log("It's hot outside");
}

// Example 3 - with multiple statements
let score = 85;

if (score >= 80) {
  console.log("Great job!");
  console.log("You passed with distinction");
}

// ----------------------------------------------------------------------------
// 2. IF-ELSE STATEMENT
// ----------------------------------------------------------------------------
// Definition: Executes one block if condition is true, another if false

let age2 = 15;

if (age2 >= 18) {
  console.log("You can vote");
} else {
  console.log("You cannot vote yet");
}

// Example 2
let isRaining = true;

if (isRaining) {
  console.log("Take an umbrella");
} else {
  console.log("Enjoy the sunshine");
}

// Example 3 - checking even or odd
let number = 7;

if (number % 2 === 0) {
  console.log(number + " is even");
} else {
  console.log(number + " is odd");
}

// ----------------------------------------------------------------------------
// 3. IF-ELSE IF-ELSE STATEMENT
// ----------------------------------------------------------------------------
// Definition: Tests multiple conditions in sequence

let marks = 75;

if (marks >= 90) {
  console.log("Grade: A+");
} else if (marks >= 80) {
  console.log("Grade: A");
} else if (marks >= 70) {
  console.log("Grade: B");
} else if (marks >= 60) {
  console.log("Grade: C");
} else if (marks >= 50) {
  console.log("Grade: D");
} else {
  console.log("Grade: F");
}

// Example 2 - time of day
let hour = 14;

if (hour < 12) {
  console.log("Good morning");
} else if (hour < 18) {
  console.log("Good afternoon");
} else if (hour < 22) {
  console.log("Good evening");
} else {
  console.log("Good night");
}

// Example 3 - temperature ranges
let temp = 28;

if (temp < 0) {
  console.log("Freezing");
} else if (temp < 15) {
  console.log("Cold");
} else if (temp < 25) {
  console.log("Moderate");
} else if (temp < 35) {
  console.log("Hot");
} else {
  console.log("Very hot");
}

// ----------------------------------------------------------------------------
// 4. NESTED IF STATEMENTS
// ----------------------------------------------------------------------------
// Definition: If statement inside another if statement

let age3 = 25;
let hasLicense = true;

if (age3 >= 18) {
  if (hasLicense) {
    console.log("You can drive");
  } else {
    console.log("You need a license to drive");
  }
} else {
  console.log("You are too young to drive");
}

// Example 2
let username = "admin";
let password = "12345";

if (username === "admin") {
  if (password === "12345") {
    console.log("Login successful");
  } else {
    console.log("Incorrect password");
  }
} else {
  console.log("User not found");
}

// ----------------------------------------------------------------------------
// 5. TERNARY OPERATOR (? :)
// ----------------------------------------------------------------------------
// Definition: Shorthand for if-else, returns a value based on condition
// Syntax: condition ? valueIfTrue : valueIfFalse

let age4 = 20;
let canVote = age4 >= 18 ? "Yes" : "No";
console.log(canVote); // "Yes"

// Example 2 - inline usage
let num = 10;
console.log(num % 2 === 0 ? "Even" : "Odd"); // "Even"

// Example 3 - assigning values
let time = 14;
let greeting = time < 12 ? "Good morning" : "Good afternoon";
console.log(greeting); // "Good afternoon"

// Example 4 - with variables
let price = 100;
let discount = price > 50 ? 10 : 5;
console.log("Discount: " + discount + "%"); // "Discount: 10%"

// Example 5 - nested ternary (not recommended, hard to read)
let score2 = 85;
let grade = score2 >= 90 ? "A" : score2 >= 80 ? "B" : score2 >= 70 ? "C" : "F";
console.log(grade); // "B"

// Better approach - use if-else if for multiple conditions
let score3 = 85;
let grade2;
if (score3 >= 90) {
  grade2 = "A";
} else if (score3 >= 80) {
  grade2 = "B";
} else if (score3 >= 70) {
  grade2 = "C";
} else {
  grade2 = "F";
}

// ----------------------------------------------------------------------------
// 6. SWITCH STATEMENT
// ----------------------------------------------------------------------------
// Definition: Executes different code blocks based on different cases
// Better than multiple if-else when checking same variable against many values

let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break; // break stops execution, prevents fall-through
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default: // executes if no case matches
    console.log("Invalid day");
}

// Example 2 - with strings
let fruit = "apple";

switch (fruit) {
  case "banana":
    console.log("Bananas are yellow");
    break;
  case "apple":
    console.log("Apples are red or green");
    break;
  case "orange":
    console.log("Oranges are orange");
    break;
  default:
    console.log("Unknown fruit");
}

// Example 3 - multiple cases with same code
let month = 2;

switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    console.log("This month has 31 days");
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    console.log("This month has 30 days");
    break;
  case 2:
    console.log("This month has 28 or 29 days");
    break;
  default:
    console.log("Invalid month");
}

// Example 4 - without break (fall-through behavior)
let grade3 = "B";

switch (grade3) {
  case "A":
    console.log("Excellent!");
  // no break - falls through to next case
  case "B":
    console.log("Good job!");
  // no break - falls through to next case
  case "C":
    console.log("You passed");
    break;
  case "F":
    console.log("Failed");
    break;
  default:
    console.log("Invalid grade");
}
// Output for "B": "Good job!" and "You passed"

// Example 5 - with return in function
function getDayType(day) {
  switch (day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      return "Weekday";
    case 6:
    case 7:
      return "Weekend";
    default:
      return "Invalid day";
  }
  // no break needed when using return
}

console.log(getDayType(6)); // "Weekend"

// ----------------------------------------------------------------------------
// 7. COMPARISON: IF-ELSE vs SWITCH
// ----------------------------------------------------------------------------

// Use IF-ELSE when:
// - Checking different conditions
// - Using comparison operators (<, >, <=, >=)
// - Complex boolean logic

let age5 = 25;
let income = 50000;

if (age5 > 18 && income > 30000) {
  console.log("Eligible for loan");
}

// Use SWITCH when:
// - Checking same variable against multiple specific values
// - Multiple equality checks (===)
// - More readable for many cases

let color = "red";

switch (color) {
  case "red":
    console.log("Stop");
    break;
  case "yellow":
    console.log("Slow down");
    break;
  case "green":
    console.log("Go");
    break;
}

// ----------------------------------------------------------------------------
// 8. TRUTHY AND FALSY VALUES IN CONDITIONS
// ----------------------------------------------------------------------------

// FALSY values: false, 0, -0, 0n, "", null, undefined, NaN
// TRUTHY values: everything else

let value1 = "";
if (value1) {
  console.log("Truthy");
} else {
  console.log("Falsy"); // This executes
}

let value2 = "hello";
if (value2) {
  console.log("Truthy"); // This executes
} else {
  console.log("Falsy");
}

// Checking for undefined/null
let user;
if (user) {
  console.log("User exists");
} else {
  console.log("User is undefined"); // This executes
}

// ----------------------------------------------------------------------------
// 9. LOGICAL OPERATORS IN CONDITIONS
// ----------------------------------------------------------------------------

// AND (&&) - both conditions must be true
let age6 = 25;
let hasID = true;

if (age6 >= 18 && hasID) {
  console.log("Entry allowed");
}

// OR (||) - at least one condition must be true
let isWeekend = false;
let isHoliday = true;

if (isWeekend || isHoliday) {
  console.log("No work today"); // This executes
}

// NOT (!) - reverses the boolean value
let isLoggedIn = false;

if (!isLoggedIn) {
  console.log("Please log in"); // This executes
}

// Combining logical operators
let age7 = 30;
let isMember = true;
let hasTicket = false;

if ((age7 < 18 || isMember) && hasTicket) {
  console.log("Can enter");
} else {
  console.log("Cannot enter"); // This executes
}

// ----------------------------------------------------------------------------
// 10. SHORT-CIRCUIT EVALUATION
// ----------------------------------------------------------------------------

// AND (&&) - stops at first falsy value
let result1 = false && console.log("This won't execute");

let result2 = true && console.log("This will execute");

// OR (||) - stops at first truthy value
let result3 = true || console.log("This won't execute");

let result4 = false || console.log("This will execute");

// Practical use - default values
let username2 = "";
let displayName = username2 || "Guest";
console.log(displayName); // "Guest"

let username3 = "John";
let displayName2 = username3 || "Guest";
console.log(displayName2); // "John"

// ----------------------------------------------------------------------------
// 11. NULLISH COALESCING OPERATOR (??) - ES2020
// ----------------------------------------------------------------------------
// Returns right operand when left is null or undefined (not other falsy values)

let count1 = 0;
let result5 = count1 || 10; // 10 (0 is falsy)
let result6 = count1 ?? 10; // 0 (0 is not null/undefined)

let name1 = null;
let result7 = name1 ?? "Anonymous"; // "Anonymous"

let name2 = "";
let result8 = name2 ?? "Anonymous"; // "" (empty string is not null/undefined)

// ----------------------------------------------------------------------------
// 12. OPTIONAL CHAINING (?.) - ES2020
// ----------------------------------------------------------------------------
// Safely access nested properties without checking each level

let user2 = {
  name: "John",
  address: {
    city: "New York",
  },
};

// Without optional chaining
if (user2 && user2.address && user2.address.city) {
  console.log(user2.address.city);
}

// With optional chaining
console.log(user2?.address?.city); // "New York"

let user3 = null;
console.log(user3?.address?.city); // undefined (no error)

// ----------------------------------------------------------------------------
// BEST PRACTICES
// ----------------------------------------------------------------------------

// 1. Use === instead of == for strict equality
if (5 === "5") {
  // false
  console.log("Equal");
}

if (5 == "5") {
  // true (type coercion)
  console.log("Equal");
}

// 2. Keep conditions simple and readable
// Bad
if (age >= 18 && age < 65 && hasLicense && !hasSuspension && hasInsurance) {
  console.log("Can drive");
}

// Better
let isAdult = age >= 18 && age < 65;
let canLegallyDrive = hasLicense && !hasSuspension && hasInsurance;

if (isAdult && canLegallyDrive) {
  console.log("Can drive");
}

// 3. Use ternary for simple conditions only
// Good
let status = isActive ? "Active" : "Inactive";

// Bad (too complex)
let message2 = isActive
  ? isVerified
    ? isPremium
      ? "Premium User"
      : "Regular User"
    : "Unverified"
  : "Inactive";

// 4. Always use break in switch (unless intentional fall-through)
// 5. Use default case in switch for unexpected values
