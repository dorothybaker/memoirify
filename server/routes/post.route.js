import { Router } from "express";
import { protectRoute } from "../utils/protectedRoute.js";
import {
  createPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
} from "../controllers/post.controller.js";

const postRouter = Router();

postRouter.post("/", protectRoute, createPost);
postRouter.put("/:id", protectRoute, updatePost);
postRouter.delete("/:id", protectRoute, deletePost);
postRouter.get("/:id", getPost);
postRouter.get("/", getPosts);

export default postRouter;
