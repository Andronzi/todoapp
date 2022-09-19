import { tables } from "../../config.js";
import { connection } from "../connect.js";

function dropTable() {
  const sql = `DROP TABLE IF EXISTS ${tables.users}`;
  connection.query(sql, (err) => {
    if (err) throw err;
    console.log("table dropped");
  });
}

function createTable() {
  const sql = `CREATE TABLE IF NOT EXISTS ${tables.users}
    (
        id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
        username VARCHAR(255) NOT NULL UNIQUE, 
	    email VARCHAR(50) NOT NULL UNIQUE, 
        password VARCHAR(255) NOT NULL
    )`;

  connection.query(sql, (err) => {
    if (err) throw err;
    console.log("table created");
  });
}

function createTables() {
  createTable();
}

export default createTables;
