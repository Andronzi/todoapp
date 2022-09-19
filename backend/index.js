import express from "express";
import jwt from "jsonwebtoken";
import userRouter from "./routes/userRouter";

const app = express();

app.use(express.json());

app.use("/api/user", userRouter);
app.use((req, res, next) => {
  next(createHttpError(codes["Not Found"], "Страница не найдена"));
});

app.use((error, req, res, next) => {
  return handleError(res, error.status || 500, error);
});

app.listen(8080, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log("Server OK");
});
