import db from "../models/index";

/**
 * We are making a class to export all the user methods. I have added
 * only one method for giving an overview You can add more methods
 *
 */
class userService {
  getAllUsers = () => {
    /**
     * Adding a promise constructor will help to understand code.
     */
    let promise = new Promise(async (resolve, reject) => {
      try {
        let users = await db.users.findAll();
        return resolve({ data: users, error: false, status: 200 });
      } catch (error) {
        return reject(error);
      }
    });
  };
}
/**
 * Here we export the class instance. This method is called Singlton Pattern. By providing this
 * there will be only one instance throughtout the application
 */

export const userServices = new userService();
