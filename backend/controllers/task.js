import createHttpError from "http-errors";
import {
  createData,
  readData,
  readAllData,
  updateData,
  deleteData,
} from "../models/task.js";
import { codes } from "../config.js";

async function createTask(req, res, next) {
  const data = req.body;
  if (JSON.stringify(data) === "{}") {
    return next(createHttpError(400, "Data wasnt provided"));
  }

  try {
    const result = await createData(data);
    res.json(result);
  } catch (err) {
    createHttpError(400, err);
  }
}

async function readTasks(req, res, next) {
  try {
    const result = await readAllData();
    res.json(result);
  } catch (err) {
    createHttpError(400, err);
  }
}

async function readTask(req, res, next) {
  readData(req.params.id);
}

async function updateTask(req, res, next) {
  const data = req.body;

  if (JSON.stringify(data) === "{}") {
    return next(createHttpError(400, "Data wasnt provided"));
  }

  updateData(data, req.params.id);
}

async function deleteTask(req, res, next) {
  deleteData(req.params.id);
}

async function userLogin(req, res, next) {
  const { email, password } = req.body;

  const user = getUser(email);

  if (!user) {
    createHttpError("401", "Unable to login");
  }
}

export { createTask, updateTask, readTask, readTasks, deleteTask };
