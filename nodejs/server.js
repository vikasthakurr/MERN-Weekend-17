// import http from "http";

// const PORT = 3000;

// //server defination
// const server = http.createServer((req, res) => {
//   //   console.log(req.headers);
//   //   console.log(req.body);
//   //   console.log(req.url);
//   //   console.log(req.method);
//   //   res.setHeader("Author", "Vikas");
//   //   res.statusCode = 404;
//   //   res.end("hii from server");
//   if (req.url == "/home") {
//     res.end("welcome to home page");
//   } else if (req.url == "/about") {
//     res.end("hii from about us page");
//   }
// });

// server.listen(PORT, () => {
//   console.log("server started");
// });

import express from "express";
import fs from "fs";
import mongoose from "mongoose";
const server = express();
server.use(express.json());
// console.log(server);
const PORT = 3000;

// server.use((req, res, next) => {
//   let username = "vikas";
//   let password = "1234";

//   if (req.body.username == username && req.body.password == password) {
//     fs.writeFileSync(
//       "./entry.txt",
//       `${req.body.username} logged in at ${Date.now()}`
//     );
//     next();
//   } else {
//     res.status(401).send("unauthorized");
//   }
// });
// server.use((req, res, next) => {
//   let role = "admin";
//   if (req.body.role == role) {
//     res.send("welcome to it room");
//     next();
//   } else {
//     res.send("you are a valid user but u don't have access to this area");
//   }
// });

mongoose
  .connect(
    "mongodb+srv://vikaskumar20012001:Vikas123@e-com.qrdtpok.mongodb.net/"
  )
  .then(() => {
    console.log("connected to database");
  })
  .catch((err) => console.log(err));

//schema

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

// const User = mongoose.model(userSchema, test);
const User = mongoose.model("User", userSchema);

//create user
server.post("/signup", async (req, res) => {
  try {
    const user = new User(req.body);
    //hashed password using bcrypt...
    // const password = req.body.password;

    const existingUser = await User.findOne({ username: req.body.username });
    if (existingUser)
      return res.status(400).json({ message: "user already exist" });

    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//read

server.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    if (!users) return res.status(404).send({ message: "something wrong" });

    res.send(users);
  } catch (err) {
    res.send(err);
  }
});

//update

server.put("/users/:id", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedUser) return res.status(404).json({ error: "user not found" });
    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//delete

server.delete("/users/:id", async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser)
      return res.status(404).json({ message: "something went wrong" });

    res.send("user deleted");
  } catch (err) {
    res.send(err);
  }
});

server.get("/", (req, res) => {
  res.end("hii from server");
});

server.get("/home", (req, res) => {
  res.end("welcome to home page");
});

server.get("/about", (req, res) => {
  res.end("hii from about us page");
  // next();
});

server.post("/login", (req, res) => {
  console.log(req.body);
});

server.listen(PORT, () => {
  console.log("server started");
});
