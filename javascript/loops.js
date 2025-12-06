// 1. FOR LOOP
// ----------------------------------------------------------------------------
// Definition: Repeats a block of code a specific number of times
// Syntax: for (initialization; condition; increment/decrement) { code }

// Example 1 - basic for loop
for (let i = 0; i < 5; i++) {
  console.log("Iteration: " + i);
}
// Output: 0, 1, 2, 3, 4

// Example 2 - print numbers 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Example 3 - counting backwards
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// Example 4 - increment by 2
for (let i = 0; i < 10; i += 2) {
  console.log(i); // 0, 2, 4, 6, 8
}

// Example 5 - loop through array
let fruits = ["apple", "banana", "orange", "mango"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Example 6 - sum of numbers
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log("Sum: " + sum); // 5050

// Example 7 - nested for loop (multiplication table)
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(i + " x " + j + " = " + i * j);
  }
}

// Example 8 - break statement (exit loop early)
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // stops loop when i is 5
  }
  console.log(i); // 0, 1, 2, 3, 4
}

// Example 9 - continue statement (skip current iteration)
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue; // skip even numbers
  }
  console.log(i); // 1, 3, 5, 7, 9
}

// ----------------------------------------------------------------------------
// 2. WHILE LOOP
// ----------------------------------------------------------------------------
// Definition: Repeats code while a condition is true
// Syntax: while (condition) { code }
// Note: Condition is checked BEFORE each iteration

// Example 1 - basic while loop
let count = 0;
while (count < 5) {
  console.log("Count: " + count);
  count++;
}
// Output: 0, 1, 2, 3, 4

// Example 2 - countdown
let num = 10;
while (num > 0) {
  console.log(num);
  num--;
}

// Example 3 - sum until condition
let total = 0;
let number = 1;
while (total < 100) {
  total += number;
  number++;
}
console.log("Total: " + total);

// Example 4 - user input simulation
let password = "";
let attempts = 0;
while (password !== "secret" && attempts < 3) {
  console.log("Enter password");
  // password = prompt("Enter password"); // in browser
  attempts++;
}

// Example 5 - infinite loop (be careful!)
// while (true) {
//     console.log("This will run forever!");
//     // Need break statement to exit
// }

// Example 6 - with break
let i = 0;
while (true) {
  console.log(i);
  i++;
  if (i >= 5) {
    break; // exit loop
  }
}

// Example 7 - processing array
let colors = ["red", "green", "blue"];
let index = 0;
while (index < colors.length) {
  console.log(colors[index]);
  index++;
}

// ----------------------------------------------------------------------------
// 3. DO-WHILE LOOP
// ----------------------------------------------------------------------------
// Definition: Executes code at least once, then repeats while condition is true
// Syntax: do { code } while (condition);
// Note: Condition is checked AFTER each iteration

// Example 1 - basic do-while
let counter = 0;
do {
  console.log("Counter: " + counter);
  counter++;
} while (counter < 5);
// Output: 0, 1, 2, 3, 4

// Example 2 - runs at least once even if condition is false
let x = 10;
do {
  console.log("This runs once: " + x);
  x++;
} while (x < 5);
// Output: "This runs once: 10" (condition is false but runs once)

// Example 3 - menu system
let choice;
do {
  console.log("1. Option A");
  console.log("2. Option B");
  console.log("3. Exit");
  // choice = prompt("Enter choice"); // in browser
  choice = 3; // simulated
} while (choice !== 3);

// Example 4 - validation
let userInput;
do {
  console.log("Enter a number between 1 and 10");
  // userInput = prompt("Enter number"); // in browser
  userInput = 5; // simulated
} while (userInput < 1 || userInput > 10);

// Example 5 - sum calculation
let sum2 = 0;
let n = 1;
do {
  sum2 += n;
  n++;
} while (n <= 10);
console.log("Sum: " + sum2); // 55

// ----------------------------------------------------------------------------
// 4. FOR...IN LOOP
// ----------------------------------------------------------------------------
// Definition: Iterates over enumerable properties of an object (keys/indexes)
// Syntax: for (variable in object) { code }
// Use: Best for objects, works with arrays but not recommended

// Example 1 - iterate over object properties
let person = {
  name: "John",
  age: 30,
  city: "New York",
};

for (let key in person) {
  console.log(key + ": " + person[key]);
}
// Output:
// name: John
// age: 30
// city: New York

// Example 2 - with array (gets indexes, not recommended)
let numbers = [10, 20, 30, 40];
for (let index in numbers) {
  console.log(index + ": " + numbers[index]);
}
// Output:
// 0: 10
// 1: 20
// 2: 30
// 3: 40

// Example 3 - nested object
let student = {
  name: "Alice",
  marks: {
    math: 90,
    science: 85,
    english: 88,
  },
};

for (let key in student) {
  console.log(key + ":", student[key]);
}

// Example 4 - checking property ownership
let car = {
  brand: "Toyota",
  model: "Camry",
  year: 2020,
};

for (let prop in car) {
  if (car.hasOwnProperty(prop)) {
    console.log(prop + ": " + car[prop]);
  }
}

// ----------------------------------------------------------------------------
// 5. FOR...OF LOOP
// ----------------------------------------------------------------------------
// Definition: Iterates over iterable objects (arrays, strings, maps, sets)
// Syntax: for (variable of iterable) { code }
// Use: Best for arrays and iterables, gets values directly

// Example 1 - iterate over array values
let fruits2 = ["apple", "banana", "orange"];
for (let fruit of fruits2) {
  console.log(fruit);
}
// Output: apple, banana, orange

// Example 2 - iterate over string
let text = "Hello";
for (let char of text) {
  console.log(char);
}
// Output: H, e, l, l, o

// Example 3 - with numbers array
let nums = [1, 2, 3, 4, 5];
let sum3 = 0;
for (let num of nums) {
  sum3 += num;
}
console.log("Sum: " + sum3); // 15

// Example 4 - iterate over Set
let uniqueNumbers = new Set([1, 2, 3, 4, 5]);
for (let num of uniqueNumbers) {
  console.log(num);
}

// Example 5 - iterate over Map
let userMap = new Map([
  ["name", "John"],
  ["age", 30],
  ["city", "NYC"],
]);

for (let [key, value] of userMap) {
  console.log(key + ": " + value);
}

// Example 6 - with break and continue
let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let num of numbers2) {
  if (num === 5) {
    continue; // skip 5
  }
  if (num === 8) {
    break; // stop at 8
  }
  console.log(num); // 1, 2, 3, 4, 6, 7
}

// ----------------------------------------------------------------------------
// 6. FOREACH METHOD
// ----------------------------------------------------------------------------
// Definition: Array method that executes a function for each array element
// Syntax: array.forEach(function(element, index, array) { code })
// Note: Cannot use break or continue, cannot return value from forEach

// Example 1 - basic forEach
let colors2 = ["red", "green", "blue"];
colors2.forEach(function (color) {
  console.log(color);
});

// Example 2 - with arrow function
let numbers3 = [1, 2, 3, 4, 5];
numbers3.forEach((num) => console.log(num * 2));

// Example 3 - with index parameter
let fruits3 = ["apple", "banana", "orange"];
fruits3.forEach(function (fruit, index) {
  console.log(index + ": " + fruit);
});
// Output:
// 0: apple
// 1: banana
// 2: orange

// Example 4 - with all three parameters
let items = ["pen", "pencil", "eraser"];
items.forEach(function (element, index, array) {
  console.log("Element: " + element);
  console.log("Index: " + index);
  console.log("Array length: " + array.length);
});

// Example 5 - modifying array elements (not recommended)
let nums2 = [1, 2, 3, 4, 5];
nums2.forEach(function (num, index, arr) {
  arr[index] = num * 2;
});
console.log(nums2); // [2, 4, 6, 8, 10]

// Example 6 - sum using forEach
let numbers4 = [10, 20, 30, 40];
let total2 = 0;
numbers4.forEach(function (num) {
  total2 += num;
});
console.log("Total: " + total2); // 100

// Example 7 - forEach with objects
let users = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Bob", age: 35 },
];

users.forEach(function (user) {
  console.log(user.name + " is " + user.age + " years old");
});

// Example 8 - cannot break forEach (use for...of instead)
let nums3 = [1, 2, 3, 4, 5];
nums3.forEach(function (num) {
  if (num === 3) {
    // break; // Error: Illegal break statement
    return; // only skips current iteration, not entire loop
  }
  console.log(num); // 1, 2, 4, 5
});

// ----------------------------------------------------------------------------
// COMPARISON: WHEN TO USE WHICH LOOP
// ----------------------------------------------------------------------------

// FOR LOOP
// - When you know exact number of iterations
// - When you need index/counter
// - When you need to control increment
let arr1 = [1, 2, 3, 4, 5];
for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
}

// WHILE LOOP
// - When number of iterations is unknown
// - When condition-based looping
// - When you need to check condition before execution
let count2 = 0;
while (count2 < 5) {
  console.log(count2);
  count2++;
}

// DO-WHILE LOOP
// - When code must execute at least once
// - Menu systems, validation
let num2 = 10;
do {
  console.log(num2);
  num2++;
} while (num2 < 5); // runs once even though condition is false

// FOR...IN LOOP
// - For iterating over object properties
// - When you need property names/keys
let obj = { a: 1, b: 2, c: 3 };
for (let key in obj) {
  console.log(key + ": " + obj[key]);
}

// FOR...OF LOOP
// - For iterating over array values
// - For strings, Sets, Maps
// - When you need values, not indexes
let arr2 = [10, 20, 30];
for (let value of arr2) {
  console.log(value);
}

// FOREACH METHOD
// - For array iteration with callback
// - When you don't need to break/return
// - Functional programming style
let arr3 = [1, 2, 3];
arr3.forEach((num) => console.log(num));

// ----------------------------------------------------------------------------
// LOOP CONTROL STATEMENTS
// ----------------------------------------------------------------------------

// BREAK - exits the loop completely
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // stops loop
  }
  console.log(i); // 0, 1, 2, 3, 4
}

// CONTINUE - skips current iteration, continues with next
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue; // skip even numbers
  }
  console.log(i); // 1, 3, 5, 7, 9
}

// RETURN - exits function (and loop if inside function)
function findNumber(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // exits function and loop
    }
  }
  return -1;
}

// ----------------------------------------------------------------------------
// COMMON LOOP PATTERNS
// ----------------------------------------------------------------------------

// Pattern 1: Sum of array
let numbers5 = [1, 2, 3, 4, 5];
let sum4 = 0;
for (let num of numbers5) {
  sum4 += num;
}

// Pattern 2: Find maximum
let nums4 = [3, 7, 2, 9, 1];
let max = nums4[0];
for (let num of nums4) {
  if (num > max) {
    max = num;
  }
}

// Pattern 3: Filter array
let numbers6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = [];
for (let num of numbers6) {
  if (num % 2 === 0) {
    evenNumbers.push(num);
  }
}

// Pattern 4: Transform array
let nums5 = [1, 2, 3, 4, 5];
let doubled = [];
for (let num of nums5) {
  doubled.push(num * 2);
}

// Pattern 5: Search in array
let fruits4 = ["apple", "banana", "orange"];
let searchTerm = "banana";
let found = false;
for (let fruit of fruits4) {
  if (fruit === searchTerm) {
    found = true;
    break;
  }
}

// Pattern 6: Reverse array
let original = [1, 2, 3, 4, 5];
let reversed = [];
for (let i = original.length - 1; i >= 0; i--) {
  reversed.push(original[i]);
}

// ----------------------------------------------------------------------------
// BEST PRACTICES
// ----------------------------------------------------------------------------

// 1. Use const in for...of when not modifying variable
for (const item of ["a", "b", "c"]) {
  console.log(item);
}

// 2. Cache array length in for loop for better performance
let largeArray = [1, 2, 3, 4, 5];
for (let i = 0, len = largeArray.length; i < len; i++) {
  console.log(largeArray[i]);
}

// 3. Use descriptive variable names
// Bad
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// Good
for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
}

// Better
for (const student of students) {
  console.log(student);
}

// 4. Avoid modifying loop variable inside loop
// Bad
for (let i = 0; i < 10; i++) {
  i += 2; // confusing
}

// Good
for (let i = 0; i < 10; i += 3) {
  console.log(i);
}

// 5. Use appropriate loop for the task
// Use forEach for simple iteration without break/continue
// Use for...of for values
// Use for...in for object properties
// Use traditional for when you need index control
