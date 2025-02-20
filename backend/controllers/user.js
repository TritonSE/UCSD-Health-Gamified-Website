/* eslint-disable */
import client from "../util/db.js";
const db = client.db("ucsd-health-database");
const users = db.collection("users");

export const createUser = async (req, res) => {
  try {
    const newUser = req.body;

    if (!newUser.name || !newUser.email) {
      return res.status(400).json({ error: "Name and email are required." });
    }

    const _ = await users.insertOne(newUser);

    res.status(201).json(newUser);
  } catch (err) {
    console.error("Error signing up user:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { email_input } = req.params;
    const { name, email, module } = req.body;

    const result = await users.findOneAndUpdate(
      { email: email_input },
      { $set: { name, email, module, firstLogin: false } },
      { returnOriginal: false },
    );

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export const getUser = async (req, res) => {
  try {
    const { email_input } = req.params;

    const user = await users.findOne({ email: email_input });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};
