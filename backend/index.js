/* eslint-disable */

import express from "express";

const app = express();
const port = 5001;

app.get("/", (req, res) => {
  res.send("Hello from the Express backend!");
});

app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});
