import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  module: Number,
  firstLogin: Boolean,
});

export const User = mongoose.model("User", userSchema);
