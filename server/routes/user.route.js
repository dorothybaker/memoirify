import { Router } from "express";
import { protectRoute } from "../utils/protectedRoute.js";
import { getUser, updateUser } from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.put("/", protectRoute, updateUser);
userRouter.get("/", protectRoute, getUser);

export default userRouter;
