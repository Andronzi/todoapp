import { tables } from "../../config.js";

function createTask() {
  return `INSERT INTO ${tables.tasks} SET ?`;
}

function updateTask() {
  return `UPDATE ${tables.tasks} SET ? WHERE id = ?`;
}

function getTasks() {
  return `SELECT * FROM ${tables.tasks}`;
}

function getTask() {
  return `SELECT * FROM ${tables.tasks} WHERE id = ?`;
}

function deleteTask() {
  return `DELETE FROM ${tables.tasks} WHERE id = ?`;
}

export { createTask, updateTask, getTasks, getTask, deleteTask };
