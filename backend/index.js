/* eslint-disable */

import express from "express";
import { MongoClient, ServerApiVersion } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 5001;

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function connectMongo() {
  try {
    // Connect to the MongoDB server
    await client.connect();
    // Send a ping command to verify the connection
    await client.db("admin").command({ ping: 1 });
    console.log("Connected to MongoDB successfully!");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
}

connectMongo();

app.get("/", (req, res) => {
  res.send("Hello from the Express backend!");
});

app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});
