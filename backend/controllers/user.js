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
    };

    const _ = await users.insertOne(newUser);

    res.status(201).json(newUser);
  } catch (err) {
    console.error("Error signing up user:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};
