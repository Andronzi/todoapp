import mysql from "mysql2";
import createTables from "./services/task.js";
import { db } from "../config.js";

const connection = mysql.createConnection(db);

function connect() {
  connection.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
  });

  createTables();
}

export { connection, connect };
