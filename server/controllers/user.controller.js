import User from "../models/user.model.js";

export const updateUser = async (req, res) => {
  const userId = req.user._id;
  const { fullName, username, email, profilePic } = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $set: { fullName, username, email, profilePic } },
      { new: true }
    );

    res.status(200).json({
      _id: updatedUser._id,
      fullName: updatedUser.fullName,
      username: updatedUser.username,
      email: updatedUser.email,
      profilePic: updatedUser.profilePic,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getUser = async (req, res) => {
  const userId = req.user._id;

  try {
    const user = await User.findById(userId).select("-password");

    if (!user) return res.status(404).json("User not found!");

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};
