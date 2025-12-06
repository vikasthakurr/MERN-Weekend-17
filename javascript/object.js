// OBJECT CREATION METHODS
// ----------------------------------------------------------------------------

// 1. OBJECT LITERAL (Most common)
// Definition: Creating object using curly braces {}

let person = {
  name: "John",
  age: 30,
  city: "New York",
};
console.log(person);

// Example 2 - empty object
let emptyObj = {};
console.log(emptyObj);

// Example 3 - nested object
let student = {
  name: "Alice",
  age: 20,
  address: {
    street: "123 Main St",
    city: "Boston",
    country: "USA",
  },
  marks: [85, 90, 88],
};

// Example 4 - object with methods
let calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
};
console.log(calculator.add(5, 3)); // 8

// Example 5 - shorthand method syntax (ES6)
let person2 = {
  name: "Bob",
  greet() {
    return "Hello, " + this.name;
  },
};
console.log(person2.greet());

// ----------------------------------------------------------------------------
// 2. USING NEW OBJECT()
// ----------------------------------------------------------------------------
// Definition: Creating object using Object constructor

let person3 = new Object();
person3.name = "Charlie";
person3.age = 25;
person3.city = "Chicago";
console.log(person3);

// Example 2
let car = new Object();
car.brand = "Toyota";
car.model = "Camry";
car.year = 2020;

// ----------------------------------------------------------------------------
// 3. USING OBJECT.CREATE()
// ----------------------------------------------------------------------------
// Definition: Creates object with specified prototype

let personProto = {
  greet: function () {
    return "Hello, " + this.name;
  },
};

let person4 = Object.create(personProto);
person4.name = "David";
person4.age = 28;
console.log(person4.greet()); // "Hello, David"

// Example 2 - creating object with null prototype
let obj = Object.create(null);
obj.name = "Test";
console.log(obj);

// ----------------------------------------------------------------------------
// 4. USING CONSTRUCTOR FUNCTION
// ----------------------------------------------------------------------------
// Definition: Function that creates objects using 'new' keyword

function Person(name, age, city) {
  this.name = name;
  this.age = age;
  this.city = city;
  this.greet = function () {
    return "Hello, I'm " + this.name;
  };
}

let person5 = new Person("Eve", 30, "Miami");
let person6 = new Person("Frank", 35, "Seattle");
console.log(person5.greet());
console.log(person6);

// ----------------------------------------------------------------------------
// ACCESSING OBJECT PROPERTIES
// ----------------------------------------------------------------------------

let book = {
  title: "JavaScript Guide",
  author: "John Doe",
  year: 2024,
  pages: 500,
};

// Dot notation
console.log(book.title); // "JavaScript Guide"
console.log(book.author); // "John Doe"

// Bracket notation
console.log(book["year"]); // 2024
console.log(book["pages"]); // 500

// Bracket notation with variable
let prop = "title";
console.log(book[prop]); // "JavaScript Guide"

// ----------------------------------------------------------------------------
// ADDING/MODIFYING PROPERTIES
// ----------------------------------------------------------------------------

let product = {
  name: "Laptop",
  price: 1000,
};

// Adding new property
product.brand = "Dell";
product["category"] = "Electronics";

// Modifying existing property
product.price = 1200;
product["name"] = "Gaming Laptop";

console.log(product);

// ----------------------------------------------------------------------------
// DELETING PROPERTIES
// ----------------------------------------------------------------------------

let employee = {
  name: "John",
  age: 30,
  department: "IT",
  salary: 50000,
};

// Delete property
delete employee.salary;
delete employee["department"];

console.log(employee); // { name: "John", age: 30 }

// ----------------------------------------------------------------------------
// OBJECT.KEYS()
// ----------------------------------------------------------------------------
// Definition: Returns an array of object's own property names (keys)

let car2 = {
  brand: "Honda",
  model: "Civic",
  year: 2022,
  color: "Blue",
};

let keys = Object.keys(car2);
console.log(keys); // ["brand", "model", "year", "color"]

// Example 2 - iterate over keys
Object.keys(car2).forEach(function (key) {
  console.log(key + ": " + car2[key]);
});

// Example 3 - count properties
let propertyCount = Object.keys(car2).length;
console.log("Number of properties: " + propertyCount); // 4

// ----------------------------------------------------------------------------
// OBJECT.VALUES()
// ----------------------------------------------------------------------------
// Definition: Returns an array of object's own property values

let student2 = {
  name: "Alice",
  age: 20,
  grade: "A",
  score: 95,
};

let values = Object.values(student2);
console.log(values); // ["Alice", 20, "A", 95]

// Example 2 - sum of numeric values
let scores = {
  math: 85,
  science: 90,
  english: 88,
};

let total = 0;
Object.values(scores).forEach(function (score) {
  total += score;
});
console.log("Total: " + total); // 263

// Example 3 - check if value exists
let hasAlice = Object.values(student2).includes("Alice");
console.log(hasAlice); // true

// ----------------------------------------------------------------------------
// OBJECT.ENTRIES()
// ----------------------------------------------------------------------------
// Definition: Returns an array of [key, value] pairs

let laptop = {
  brand: "Apple",
  model: "MacBook Pro",
  year: 2023,
  price: 2000,
};

let entries = Object.entries(laptop);
console.log(entries);
// [["brand", "Apple"], ["model", "MacBook Pro"], ["year", 2023], ["price", 2000]]

// Example 2 - iterate over entries
Object.entries(laptop).forEach(function ([key, value]) {
  console.log(key + " = " + value);
});

// Example 3 - convert to Map
let laptopMap = new Map(Object.entries(laptop));
console.log(laptopMap);

// Example 4 - filter entries
let expensiveItems = Object.entries(laptop).filter(function ([key, value]) {
  return typeof value === "number" && value > 1000;
});
console.log(expensiveItems); // [["year", 2023], ["price", 2000]]

// ----------------------------------------------------------------------------
// OBJECT.ASSIGN()
// ----------------------------------------------------------------------------
// Definition: Copies properties from source objects to target object

let target = { a: 1, b: 2 };
let source = { b: 3, c: 4 };
let result = Object.assign(target, source);
console.log(result); // { a: 1, b: 3, c: 4 }
console.log(target); // { a: 1, b: 3, c: 4 } (target is modified)

// Example 2 - merge multiple objects
let obj1 = { a: 1 };
// let obj2 = { b: 2 };
let obj3 = { c: 3 };
let merged = Object.assign({}, obj1, obj2, obj3);
console.log(merged); // { a: 1, b: 2, c: 3 }

// Example 3 - clone object (shallow copy)
let original = { name: "John", age: 30 };
let clone = Object.assign({}, original);
clone.age = 35;
console.log(original.age); // 30 (unchanged)
console.log(clone.age); // 35

// ----------------------------------------------------------------------------
// OBJECT.FREEZE()
// ----------------------------------------------------------------------------
// Definition: Prevents modification of object properties

let config = {
  apiKey: "abc123",
  apiUrl: "https://api.example.com",
};

Object.freeze(config);

// These will fail silently (or throw error in strict mode)
config.apiKey = "xyz789"; // No effect
config.newProp = "test"; // No effect
delete config.apiUrl; // No effect

console.log(config); // Original object unchanged

// Check if frozen
console.log(Object.isFrozen(config)); // true

// ----------------------------------------------------------------------------
// OBJECT.SEAL()
// ----------------------------------------------------------------------------
// Definition: Prevents adding/deleting properties, but allows modification

let settings = {
  theme: "dark",
  language: "en",
};

Object.seal(settings);

// Can modify existing properties
settings.theme = "light"; // Works
console.log(settings.theme); // "light"

// Cannot add new properties
settings.newProp = "test"; // No effect

// Cannot delete properties
delete settings.language; // No effect

console.log(Object.isSealed(settings)); // true


// ----------------------------------------------------------------------------
// IN OPERATOR
// ----------------------------------------------------------------------------
// Definition: Checks if property exists in object (including inherited)

let user3 = {
  name: "Alice",
  age: 25,
};

console.log("name" in user3); // true
console.log("email" in user3); // false
console.log("toString" in user3); // true (inherited from Object.prototype)

// ----------------------------------------------------------------------------
// SPREAD OPERATOR WITH OBJECTS (ES6)
// ----------------------------------------------------------------------------
// Definition: Copies properties from one object to another

let person8 = {
  name: "John",
  age: 30,
};

// Clone object
let person9 = { ...person8 };
console.log(person9); // { name: "John", age: 30 }

// Merge objects
let address = {
  city: "New York",
  country: "USA",
};

let fullProfile = { ...person8, ...address };
console.log(fullProfile);
// { name: "John", age: 30, city: "New York", country: "USA" }

// Override properties
let updated = { ...person8, age: 35, email: "john@example.com" };
console.log(updated);
// { name: "John", age: 35, email: "john@example.com" }

// ----------------------------------------------------------------------------
// DESTRUCTURING OBJECTS (ES6)
// ----------------------------------------------------------------------------
// Definition: Extract properties from object into variables

let user4 = {
  name: "Bob",
  age: 28,
  email: "bob@example.com",
};

// Basic destructuring
let { name, age, email } = user4;
console.log(name); // "Bob"
console.log(age); // 28

// Destructuring with different variable names
let { name: userName, age: userAge } = user4;
console.log(userName); // "Bob"
console.log(userAge); // 28

// Destructuring with default values
let { name: n, age: a, phone = "N/A" } = user4;
console.log(phone); // "N/A"

// Nested destructuring
let student3 = {
  name: "Alice",
  marks: {
    math: 90,
    science: 85,
  },
};

let {
  name: studentName,
  marks: { math, science },
} = student3;
console.log(math); // 90
console.log(science); // 85

// ----------------------------------------------------------------------------
// COMPUTED PROPERTY NAMES (ES6)
// ----------------------------------------------------------------------------
// Definition: Use expressions as property names

let propName = "age";
let person10 = {
  name: "John",
  [propName]: 30, // computed property name
  ["is" + "Active"]: true,
};
console.log(person10); // { name: "John", age: 30, isActive: true }

// Example 2
let key = "color";
let value = "blue";
let obj2 = {
  [key]: value,
};
console.log(obj2); // { color: "blue" }

// ----------------------------------------------------------------------------
// OBJECT ITERATION METHODS
// ----------------------------------------------------------------------------

let product2 = {
  name: "Phone",
  price: 500,
  brand: "Samsung",
  inStock: true,
};

// Method 1: for...in loop
for (let key in product2) {
  console.log(key + ": " + product2[key]);
}

// Method 2: Object.keys()
Object.keys(product2).forEach(function (key) {
  console.log(key + ": " + product2[key]);
});

// Method 3: Object.entries()
Object.entries(product2).forEach(function ([key, value]) {
  console.log(key + ": " + value);
});

// Method 4: Object.values()
Object.values(product2).forEach(function (value) {
  console.log(value);
});

