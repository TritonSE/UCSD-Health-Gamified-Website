/* eslint-disable */
import { body, param } from "express-validator";

// Validator for user sign up
export const createUserValidator = [
  body("name")
    .exists()
    .withMessage("Name is required")
    .bail()
    .isString()
    .withMessage("Name must be a string")
    .bail()
    .notEmpty()
    .withMessage("Name cannot be empty"),

  body("email")
    .exists()
    .withMessage("Email is required")
    .bail()
    .isEmail()
    .withMessage("Invalid email format")
    .bail()
    .normalizeEmail(),

  body("password")
    .exists()
    .withMessage("Password is required")
    .bail()
    .isString()
    .withMessage("Password must be a string")
    .bail()
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long"),
];

// Validator for updating user info
export const updateUserValidator = [
  param("email_input")
    .exists()
    .withMessage("Email parameter is required")
    .bail()
    .isEmail()
    .withMessage("Invalid email format")
    .bail()
    .normalizeEmail(),

  body("name").optional().isString().withMessage("Name must be a string"),

  body("email").optional().isEmail().withMessage("Invalid email format").bail().normalizeEmail(),

  body("module").optional().isString().withMessage("Module must be a string"),
];
