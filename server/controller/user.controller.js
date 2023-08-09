import { userService } from "../services/userService";
import { APIError } from "../helpers/Error";

/**
 * @returns all the users from the database
 * The controller is always responsible to sanitize input and give it to the service method
 */
export const getAllUsers = async (request, response, next) => {
  try {
    /**
     * if you need to pass any of the parameters.
     *  You can pass directly to the service method below
     */
    let users = await userService.getAllUsers();
    return response.status(users.status).send(users);
  } catch (error) {
    /**
     * We have created different error response for different error types
     * and calling it from catch block
     */
    return next(new APIError(error.message, "Your API Name", error));
  }
};
