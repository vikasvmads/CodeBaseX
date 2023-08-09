/**
 * This config file help us to configure all process variables from the environment
 * file.
 */

module.exports = {
  env: process.env,
  debugAPI: {
    USER_API_NAME: process.env.USER_API_NAME,
  },
  redis: {
    url: process.env.REDIS_URL,
    username: process.env.REDIS_USERNAME,
    password: process.env.REDIS_PASSWORD,
  },
};
