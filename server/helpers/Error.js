import Logger from "../utils/Logger";

/**
 * The below methods are used to define different kinds of error.
 * It will help while debugging.
 */
export class BaseError extends Error {
  constructor(status, message, apiName, err) {
    super(message);
    this.statusCode = status;
    this.message = message;
    /**
     * The below method is used to log an error in the terminal.
     * You can use it based on the flag. If flag value is true then it will log the error
     */
    Logger.ErrorLogger(process.env.flag, err ? err : message, "", apiName);
    Error.captureStackTrace(this, this.constructor);
  }
}

export class NotFoundError extends BaseError {
  constructor(path) {
    super(404, `The requested path ${path} not found!`);
  }
}

export class APIError extends BaseError {
  constructor(message, apiName, errorObj) {
    super(500, message, apiName, errorObj);
  }
}

export class ValidationError extends BaseError {
  constructor(message, apiName, errorObj) {
    super(400, message, apiName, errorObj);
  }
}

export class UnauthorizedError extends BaseError {
  constructor(message, apiName, errorObj) {
    super(401, message, apiName, errorObj);
  }
}

export class AuthenticationError extends BaseError {
  constructor(message, apiName, errorObj) {
    super(422, message, apiName, errorObj);
  }
}

export default class ErrorHandler {
  static handle = () => {
    return async (err, req, res, next) => {
      const statusCode = err.statusCode || 500;
      res.status(statusCode).send({
        success: false,
        message: err.message,
        rawErrors: err.rawErrors ?? [],
        stack: err.stack,
      });
    };
  };
}
