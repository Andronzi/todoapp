import express from "express";
import cors from "cors";
import taskRouter from "./routes/taskRouter.js";
import { connect } from "./db/connect.js";
import createHttpError from "http-errors";
import { codes } from "./config.js";

const app = express();

app.use(cors());
app.options("*", cors());
app.use(express.json());

app.use("/api/task", taskRouter);

app.all("*", (req, res, next) => {
  next(createHttpError(404, "Страница не найдена"));
});

app.use((error, req, res, next) => {
  next(createHttpError(500, "Internal Server Error"));
});

app.listen(8080, async err => {
  await connect();

  if (err) {
    return console.log(err);
  }

  console.log("Server OK");
});
