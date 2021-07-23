const expressServer = require("./server/expressServer");
const config = require("../config");
const logger = require("./logger");

const startServer = async () => {
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
