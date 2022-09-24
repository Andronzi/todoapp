import { connection } from "../db/connect.js";
import { handleAnswer } from "../middleware/answerHandler.js";
import createHttpError from "http-error";
import {
  createTask,
  updateTask,
  getTasks,
  getTask,
  deleteTask,
} from "../db/helpers/tasksql.js";

async function createData(values) {
  connection.query(createTask(), [values], (err, result) => {
    if (err) throw err;
    console.log(result);
  });
}

function updateData(values, id) {
  connection.query(updateTask(), [values, id], (err, results) => {
    if (err) throw err;
    else console.log(values);
  });
}

function readAllData() {
  return new Promise((resolve, reject) => {
    resolve(1);
    connection.query(getTasks(), [], (err, results) => {
      if (err) reject(err);
      else resolve(results);
    });
  });
}

function readData(email) {
  connection.query(getTask(), [email], (err, results) => {
    if (err) throw err;
    else console.log(values);
  });
}

function deleteData(id) {
  connection.query(deleteTask(), [id], (err, results) => {
    if (err) throw err;
    else console.log(values);
  });
}

export { createData, updateData, readAllData, readData, deleteData };
