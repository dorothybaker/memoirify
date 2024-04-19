import { Schema, model } from "mongoose";

const PostSchema = new Schema(
  {
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    image: { type: String, default: "" },
    user: { type: Schema.Types.ObjectId, ref: "User" },
    category: String,
  },
  { timestamps: true }
);

const Post = model("Post", PostSchema);

export default Post;
