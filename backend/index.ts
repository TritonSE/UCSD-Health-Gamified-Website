/* eslint-disable */

import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { connectMongo } from "./util/db";
import { isHttpError } from "http-errors"
import userRoutes from "./routes/user";

const app = express();
const port = 5001;

connectMongo();

app.use(express.json());
app.use(cors());

app.use("/api/user", userRoutes);

app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
  let statusCode = 500;
  let errorMessage = "An error has occurred.";

  if (isHttpError(err)) {
    statusCode = err.status;
    errorMessage = err.message;
  }
  else if (err instanceof Error) {
    errorMessage = err.message;
  }

  res.status(statusCode).json({ error: errorMessage });
})

app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});
