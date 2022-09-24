import { tables } from "../../config.js";
import { connection } from "../connect.js";

function dropTable() {
  const sql = `DROP TABLE IF EXISTS ${tables.tasks}`;
  connection.query(sql, err => {
    if (err) throw err;
    console.log("table dropped");
  });
}

function createTable() {
  const sql = `CREATE TABLE IF NOT EXISTS ${tables.tasks}
    (
        id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL UNIQUE
    )`;

  connection.query(sql, err => {
    if (err) throw err;
    console.log("table created");
  });
}

function createTables() {
  createTable();
}

export default createTables;
