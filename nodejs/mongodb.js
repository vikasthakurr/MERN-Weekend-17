import mongoose from "mongoose";

/**
 * MongoDB CRUD Operations with Mongoose: mongodb.js
 *
 * Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js.
 * It manages relationships between data, provides schema validation,
 * and is used to translate between objects in code and the representation
 * of those objects in MongoDB.
 */

// =========================================================
// 1. CONNECTION SETUP
// =========================================================

const MONGO_URI =
  "mongodb+srv://vikaskumar20012001:Vikas123@e-com.qrdtpok.mongodb.net/";

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB successfully!");
    // Run the CRUD demo after connection
    runCrudDemo();
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });

// =========================================================
// 2. SCHEMA AND MODEL DEFINITION
// =========================================================

/**
 * A Schema defines the structure of the document,
 * default values, validators, etc.
 */
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

/**
 * A Model is a compiled version of the schema.
 * An instance of a model is called a document.
 * Models are responsible for creating and reading documents
 * from the underlying MongoDB database.
 */
const User = mongoose.model("User", userSchema);

// =========================================================
// 3. CRUD OPERATIONS DEMO
// =========================================================

async function runCrudDemo() {
  try {
    console.log("\n--- Starting CRUD Demo ---");

    // --- CREATE ---
    console.log("C: Creating a new user...");
    const newUser = new User({
      username: "vikas_demo",
      password: "password123",
    });
    const savedUser = await newUser.save();
    console.log("User Saved:", savedUser);

    // --- READ ---
    console.log("\nR: Reading users from database...");
    const users = await User.find();
    console.log("Total Users Found:", users.length);

    // Reading a specific user
    const foundUser = await User.findOne({ username: "vikas_demo" });
    console.log("Found User by Username:", foundUser.username);

    // --- UPDATE ---
    if (foundUser) {
      console.log("\nU: Updating user password...");
      const updatedUser = await User.findByIdAndUpdate(
        foundUser._id,
        { password: "new_secure_password" },
        { new: true } // Return the updated document
      );
      console.log("Updated User:", updatedUser);
    }

    // --- DELETE ---
    if (foundUser) {
      console.log("\nD: Deleting the demo user...");
      const deletedUser = await User.findByIdAndDelete(foundUser._id);
      console.log("Deleted User:", deletedUser.username);
    }

    console.log("\n--- CRUD Demo Completed ---");

    // Close connection after demo
    // mongoose.connection.close();
  } catch (err) {
    console.error("Error during CRUD demo:", err);
  }
}

/**
 * Pointers for MongoDB/Mongoose:
 * 1. mongoose.connect(uri) - Connects to the cloud or local DB.
 * 2. Schema - Blueprint of your data.
 * 3. Model - Interface for interacting with the collection.
 * 4. Model.find() - Fetching documents.
 * 5. Model.save() or Model.create() - Adding data.
 * 6. Model.findByIdAndUpdate() - Modifying data.
 * 7. Model.findByIdAndDelete() - Removing data.
 */
