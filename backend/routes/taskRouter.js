import express from "express";
import {
  createTask,
  readTask,
  updateTask,
  deleteTask,
  readTasks,
} from "../controllers/task.js";

const taskRouter = express.Router();
taskRouter.get("/", readTasks);
taskRouter.post("/create", createTask);
taskRouter.get("/:id", readTask);
taskRouter.put("/edit/:id", updateTask);
taskRouter.get("/delete/:id", deleteTask);

export default taskRouter;
