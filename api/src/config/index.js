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
  database: {
    host: process.env.DATABASE_HOST,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    name: process.env.DATABASE_NAME,
  },
  auth: {},
};
