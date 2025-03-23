/* eslint-disable */
// import client from "../util/db.js";
// const db = client.db("ucsd-health-database");
// const users = db.collection("users");

import createHttpError from "http-errors";
import { validationResult } from "express-validator";
import UserModel from "../models/user";
import validationErrorParser from "..util/validationErrorParser";

export const createUser = async (req, res, next) => {
  const errors = validationResult(req);
  try {
    validationErrorParser(errors);

    const { name, email, module } = req.body;

    const newUser = await UserModel.create({
      name,
      email,
      module,
      firstLogin: true,
    });
    
    res.status(201).json(newUser);

  } catch (error) {
    next(error);
  }
};

export const updateUser = async (req, res, next) => {
  const { email_input } = req.params;
  const { name, email, module } = req.body;
  try {

    const updatedUser = await UserModel.findOneAndUpdate(
      { email: email_input },
      { $set: { name, email, module, firstLogin: false } },
      { new: true },
    );

    if (!updatedUser) {
      throw createHttpError(404, "User not found.")
    }

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export const getUser = async (req, res, next) => {
  const { email_input } = req.params;
  try {
    const user = await UserModel.findOne({ email: email_input });

    if (!user) {
      throw createHttpError(404, "User not found.")
    }

    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};
