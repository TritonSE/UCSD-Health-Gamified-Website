/* eslint-disable */
import client from "../util/db.js";
import { User } from "../models/user.js";

export const createUser = async (req, res) => {
  try {
    const newUser = req.body;

    if (!newUser.name || !newUser.email) {
      return res.status(400).json({ error: "Name and email are required." });
    }

    //const _ = await users.insertOne(newUser);
    const savedUser = await User.create(newUser);

    res.status(201).json(savedUser);
  } catch (err) {
    console.error("Error signing up user:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { email_input } = req.params;
    const { name, email, module } = req.body;

    const result = await User.findOneAndUpdate(
      { email: email_input },
      { $set: { name, email, module, firstLogin: false } },
      { returnOriginal: false },
    );

    res.status(200).json(result);
  } catch (err) {
    console.error("Error updating user:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getUser = async (req, res) => {
  try {
    const { email_input } = req.params;

    const user = await User.findOne({ email: email_input });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json(user);
  } catch (err) {
    console.error("Error getting user:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};
