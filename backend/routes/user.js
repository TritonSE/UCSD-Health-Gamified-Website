/* eslint-disable */
import express from "express";
import { createUser, updateUser, getUser } from "../controllers/user.js";
import { createUserValidator, updateUserValidator } from "../validators/user.js";
import { requireSignedIn } from "../middleware/requireSignedIn.js";

const router = express.Router();

router.post("/signup", createUserValidator, createUser);
router.put(
  "/update/:email_input",
  requireSignedIn,
  updateUserValidator,
  async (req, res, next) => {
    if (req.userEmail !== req.params.email_input) {
      return res.status(403).json({ error: "You can only update your own account." });
    }
    next();
  },
  updateUser,
);
router.get("/get/:email_input", getUser);

export default router;
