/* eslint-disable */
import express from "express";

import { createUser, updateUser, getUser } from "../controllers/user.js";

const router = express.Router();

router.post("/signup", createUser);
router.put("/update/:email_input", updateUser);
router.get("/get/:email_input", getUser);

export default router;
