import { connection } from "../db/connect.js";
import {
  createUser,
  updateUser,
  readUser,
  deleteUser,
} from "../db/helpers/usersql.js";

function createUser(sendOk, sendBad, values) {
  connection.query(createUser(), [values], (err, results) => {
    if (err) sendBad(err);
    else sendOk(values);
  });
}

function updateUser(sendOk, sendBad, values, id) {
  connection.query(updateUser(), [values, id], (err, results) => {
    if (err) sendBad(err);
    else sendOk(values);
  });
}

function readUser(sendOk, sendBad, id) {
  connection.query(readUser(), [id], (err, results) => {
    if (err) sendBad(err);
    else sendOk(results);
  });
}

function deleteUser(sendOk, sendBad, id) {
  connection.query(deleteUser(), [id], (err, results) => {
    if (err) sendBad(err);
    else sendOk(results.affectedRows + " rows was deleted");
  });
}

export { create, update, read, deleteitem };
