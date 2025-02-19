/* eslint-disable */
import client from "../util/db.js";

export const createUser = async (req, res) => {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({ error: "Name and email are required." });
    }

    const db = client.db("ucsd-health-database");
    const users = db.collection("users");

    const newUser = {
      name,
      email,
      module: 1,
      firstLogin: true,
    };

    const _ = await users.insertOne(newUser);

    res.status(201).json(newUser);
  } catch (err) {
    console.error("Error signing up user:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const updateUser = async (req, res) => {
  const { email_input } = req.params;
  const { name, email, module, firstLogin } = req.body;
  if (id === req.body._id) {
    try {
      const result = await client.findOneAndUpdate(
        { email: email_input },
        { $set: { name, email, module, firstLogin: false } },
        { returnOriginal: false },
      );
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  } else {
    res.status(400).json({ error: "Invalid request" });
  }
};

export const getUser = async (req, res) => {
  const { email_input } = req.params;
  try {
    const user = await client.findOne({ email: email_input });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};
