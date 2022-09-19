import express from "express";
import {
  createUser,
  readUser,
  updateUser,
  deleteUser,
} from "../controllers/user.js";

const userRouter = express.Router();
userRouter.post("/create", createUser);
userRouter.get("/:id", readUser);
userRouter.put("/edit/:id", updateUser);
userRouter.get("/delete/:id", deleteUser);

export default userRouter;
