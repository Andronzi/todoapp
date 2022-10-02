import createHttpError from "http-errors";
import {
  createData,
  readData,
  readAllData,
  updateData,
  deleteData,
} from "../models/task.js";

async function createTask(req, res, next) {
  const data = req.body;
  if (JSON.stringify(data) === "{}") {
    next(createHttpError(400, "Data wasnt provided"));
  }

  try {
    const result = await createData(data);
    res.json(result);
  } catch (err) {
    next(createHttpError(500, err));
  }
}

async function readTasks(req, res, next) {
  try {
    const result = await readAllData();
    res.json(result);
  } catch (err) {
    next(createHttpError(500, err));
  }
}

async function readTask(req, res, next) {
  const id = req.params.id;

  if (!id || id <= 0) {
    next(createHttpError(400, "Data wasnt provided"));
  }

  try {
    const result = await readData(req.params.id);
    res.json(result);
  } catch (err) {
    next(createHttpError(500, err));
  }
}

async function updateTask(req, res, next) {
  const data = req.body;
  const id = req.params.id;

  if (JSON.stringify(data) === "{}") {
    next(createHttpError(400, "Data wasnt provided"));
  }

  if (!id || id <= 0) {
    next(createHttpError(400, "Data wasnt provided"));
  }

  try {
    const result = await updateData(data, id);
    res.json({
      message: "Data was updated",
      data: result,
    });
  } catch (err) {
    next(createHttpError(500, err));
  }
}

async function deleteTask(req, res, next) {
  const id = req.params.id;

  if (!id || id <= 0) {
    next(createHttpError(400, "Data wasnt provided"));
  }

  try {
    const result = await deleteData(id);
    res.json(result);
  } catch (err) {
    next(createHttpError(500, err));
  }
}

export { createTask, updateTask, readTask, readTasks, deleteTask };
