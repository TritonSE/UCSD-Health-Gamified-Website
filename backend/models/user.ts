/* eslint-disable */
import { Schema, model, InferSchemaType } from "mongoose";

const userSchema = new Schema({
    name: { type: String, required: true},
    email: { type: String, required: true, unique: true},
    module: { type: String },
    firstLogin: { type: Boolean, default: true},
}, { timestamps: true});

type User = InferSchemaType<typeof userSchema>;

export default model<User>("User", userSchema, "users");