import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    fullName: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilePic: { type: String, default: "" },
  },
  { timestamps: true }
);

const User = model("User", UserSchema);

export default User;
