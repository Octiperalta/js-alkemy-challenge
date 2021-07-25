const expressServer = require("./server/expressServer");
const config = require("../config");
const logger = require("./logger");

// # Temporary imports
const { poolConnection } = require("../loaders/mysql");
const mysql = require("mysql");
const userService = require("../services/userService");

const startServer = async () => {
  // await mysqlConnect();
  // logger.info(
  // `╒═══════════════════════════════════╕
  // │ ✔ Connected to MySQL successfully │
  // ╘═══════════════════════════════════╛`
  // );

  const server = new expressServer();
  logger.info(
    `╒════════════════════════════╕
      │ ✔ Express loaded correctly │
      ╘════════════════════════════╛`
  );

  await server.start();
  logger.info(
    `╒════════════════════════════════════════════╕
      │ ✔ Server running on http://localhost:${config.port}/ │
      ╘════════════════════════════════════════════╛`
  );
};

module.exports = startServer;
