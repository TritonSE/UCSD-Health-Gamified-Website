/* eslint-disable */
import express from "express";

import { createUser } from "../controllers/user.js";

const router = express.Router();

router.post("/signup", createUser);

export default router;
