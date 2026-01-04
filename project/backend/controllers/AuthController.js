import express from "express";
import User from "../schema/User.js";
import mongoose from "mongoose";
import fs from "fs";
import bcrypt from "bcryptjs";
const AuthController = express();
// import User from "../schema/User.js";

AuthController.post("/register", async (req, res) => {
  try {
    // const user = new User(req.body);
    const { username, password, email } = req.body;
    //hashed password using bcrypt...
    // const password = req.body.password;

    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser)
      return res.status(400).json({ message: "user already exist" });

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const user = new User({
      username: req.body.username,
      password: hashedPassword,
      email: req.body.email,
    });
    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

//login route

AuthController.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email: email });
    if (!existingUser) return res.status(400).json({ message: "invalid user" });

    //password matching...
    const isMatch = await bcrypt.compare(password, User.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // if (!isMatch) return res.status(404).json({ message: "wrong password" });

    res.status(200).json({ message: "login successful" });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});
export default AuthController;
