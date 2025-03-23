/* eslint-disable */
import express from "express";
import { createUser, updateUser, getUser } from "../controllers/user.ts";
import { createUserValidator, updateUserValidator } from "../validators/user.ts";

const router = express.Router();

router.post("/signup", createUserValidator, createUser);
router.put("/update/:email_input", updateUserValidator, updateUser);
router.get("/get/:email_input", getUser);

export default router;
