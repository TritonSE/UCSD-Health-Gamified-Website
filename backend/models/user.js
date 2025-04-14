import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  module: String,
  firstLogin: Boolean,
});

export const User = mongoose.model("User", userSchema);
