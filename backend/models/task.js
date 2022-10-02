import { connection } from "../db/connect.js";
import {
  createTask,
  updateTask,
  getTasks,
  getTask,
  deleteTask,
} from "../db/helpers/tasksql.js";

async function createData(values) {
  return new Promise((resolve, reject) => {
    connection.query(createTask(), [values], (err, result) => {
      if (err) reject(err);
      else resolve(values);
    });
  });
}

function updateData(values, id) {
  return new Promise((resolve, reject) => {
    connection.query(updateTask(), [values, id], (err, results) => {
      if (err) reject(err);
      else resolve(values);
    });
  });
}

function readAllData() {
  return new Promise((resolve, reject) => {
    connection.query(getTasks(), [], (err, results) => {
      if (err) reject(err);
      else resolve(results);
    });
  });
}

function readData(id) {
  console.log(id);
  return new Promise((resolve, reject) => {
    connection.query(getTask(), [id], (err, results) => {
      if (err) reject(err);
      else resolve(results);
    });
  });
}

function deleteData(id) {
  return new Promise((resolve, reject) => {
    connection.query(deleteTask(), [id], (err, results) => {
      if (err) reject(err);
      else resolve("Deleting was successfull");
    });
  });
}

export { createData, updateData, readAllData, readData, deleteData };
