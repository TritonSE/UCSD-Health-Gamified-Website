/* eslint-disable */

import express from "express";
import cors from "cors";
import { connectMongo } from "./util/db.js";
import userRoutes from "./routes/user.js";

const app = express();
const port = 5001;

connectMongo();

app.use(express.json());
app.use(cors());

app.use("/api/user", userRoutes);

app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});
