import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/generateToken.js";

export const register = async (req, res) => {
  const { fullName, username, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(401).json("Email address already exists!");

    const hashedPassword = bcrypt.hashSync(password, 12);
    const newUser = new User({
      fullName,
      username,
      email,
      password: hashedPassword,
    });

    if (newUser) {
      generateToken(newUser._id, res);
      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        email: newUser.email,
        profilePic: newUser.profilePic,
      });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user)
      return res.status(403).json("Invalid email address or password!");

    const isCorrectPassword = bcrypt.compareSync(password, user.password || "");
    if (!isCorrectPassword)
      return res.status(403).json("Invalid email address or password!");

    generateToken(user._id, res);
    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      email: user.email,
      profilePic: user.profilePic,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const logout = async (req, res) => {
  try {
    res.cookie("token", "", { maxAge: 0 });
    res.status(200).json("Logged out successfully!");
  } catch (error) {
    res.status(500).json(error);
  }
};
