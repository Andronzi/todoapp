const config = {
  db: {
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "1111",
    database: "todo",
  },
  tables: {
    users: "users",
  },
  listPerPage: 10,
  codes: {
    ["OK"]: 200,
    ["BAD REQUEST"]: 400,
    ["Unauthorized"]: 401,
    ["Forbidden"]: 403,
    ["Not Found"]: 404,
    ["Internal Server Error"]: 500,
  },
};

export const db = config.db;
export const tables = config.tables;
export const codes = config.codes;
