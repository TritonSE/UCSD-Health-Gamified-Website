/* eslint-disable */
import express from "express";

import { createUser, updateUser } from "../controllers/user.js";

const router = express.Router();

router.post("/signup", createUser);
router.update("/update/:email_input", updateUser);
router.get("/get/:email_input", getUser);

export default router;
