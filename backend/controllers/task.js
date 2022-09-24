import createHttpError from "http-error";
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
    return next(createHttpError(codes["BAD REQUEST"], "Data wasnt provided"));
  }

  const result = createData(data);
  console.log(result);
}

async function readTasks(req, res, next) {
  //readAllData().then(data => console.log(data));
  const result = readAllData();
  result.then(data => console.log(data));
}

async function readTask(req, res, next) {
  readData(req.params.id);
}

async function updateTask(req, res, next) {
  const data = req.body;

  if (JSON.stringify(data) === "{}") {
    return next(createHttpError(codes["BAD REQUEST"], "Data wasnt provided"));
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
    throw new HttpException("401", "Unable to login");
  }
}

export { createTask, updateTask, readTask, readTasks, deleteTask };
