import Post from "../models/post.model.js";

export const createPost = async (req, res) => {
  const userId = req.user._id;
  const { image, title, description, category } = req.body;

  try {
    const newPost = new Post({
      title,
      description,
      image,
      user: userId,
      category,
    });

    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updatePost = async (req, res) => {
  const { image, title, description, category } = req.body;
  const { id } = req.params;
  const userId = req.user._id;

  try {
    const post = await Post.findById(id);

    if (!post.user.equals(userId))
      return res.status(403).json("You can only update your post!");

    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { $set: { image, title, description, category, user: userId } },
      { new: true }
    );

    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deletePost = async (req, res) => {
  const { id } = req.params;
  const userId = req.user._id;

  try {
    const post = await Post.findById(id);

    if (!post.user.equals(userId))
      return res.status(403).json("You can only delete your post!");

    await post.deleteOne();
    res.status(200).json("Post deleted successfully!");
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getPost = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await Post.findById(id).populate("user");

    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });

    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json(error);
  }
};
