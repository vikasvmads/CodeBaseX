import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import indexRouter from "./routes/index";
import usersRouter from "./routes/users";
import ErrorHandler from "../helpers/errorLogger";

var app = express();
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../public")));
app.use("/", indexRouter);
app.use("/users", usersRouter);

/**
 * We have created a error handler and attached it to the application instance. This is
 * a good practice to return error in a uniform way
 */
app.use(ErrorHandler.handle());

export default app;
