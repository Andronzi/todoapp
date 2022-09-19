import { tables } from "../../config.js";

function createUser() {
  return `INSERT INTO ${tables.food} SET ?`;
}

function updateUser() {
  return `UPDATE ${tables.users} SET ? WHERE id = ?`;
}

function getUser() {
  return `SELECT * FROM ${tables.users} WHERE id = ?`;
}

function deleteUser() {
  return `DELETE FROM ${tables.users} WHERE id = ?`;
}

export { createUser, updateUser, getUser, deleteUser };
