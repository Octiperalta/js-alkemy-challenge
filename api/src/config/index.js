const dotenv = require("dotenv");
const envFound = dotenv.config();

if (!envFound) {
  throw new Error("Couldn't find .env file.");
}

module.exports = {
  port: process.env.PORT,
  api: {
    prefix: "/api/v1",
  },
  log: {
    level: process.env.LOG_LEVEL,
  },
  database: {},
  auth: {},
};
