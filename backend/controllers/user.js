import createHttpError from "http-error";
import {
  createUser,
  readUser,
  updateUser,
  deleteUser,
} from "../models/user.js";
import { codes } from "../config.js";
import { handleAnswer } from "../middleware/answerHandler.js";

function createUser(req, res, next) {
  const data = req.body;
  if (JSON.stringify(data) === "{}") {
    return next(createHttpError(codes["BAD REQUEST"], "Data wasnt provided"));
  }

  createUser(
    (results) => handleAnswer(res, codes["OK"], results),
    (err) => next(createHttpError(codes["Internal Server Error"], err)),
    data
  );
}

function readUser(req, res, next) {
  readUser(
    (results) => handleAnswer(res, codes["OK"], results),
    (err) => next(createHttpError(codes["Internal Server Error"], err)),
    req.params.id
  );
}

function updateUser(req, res, next) {
  const data = req.body;

  if (JSON.stringify(data) === "{}") {
    return next(createHttpError(codes["BAD REQUEST"], "Data wasnt provided"));
  }

  updateUser(
    (results) => handleAnswer(res, codes["OK"], results),
    (err) => next(createHttpError(codes["Internal Server Error"], err)),
    data,
    req.params.id
  );
}

function deleteUser(req, res, next) {
  deleteUser(
    (results) => handleAnswer(res, codes["OK"], results),
    (err) => next(createHttpError(codes["Internal Server Error"], err)),
    req.params.id
  );
}

export { createUser, updateUser, readUser, deleteUser };
