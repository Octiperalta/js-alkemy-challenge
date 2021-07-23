const winston = require("winston");
const { logger } = require("../../config");
const { log } = require("../../config");

const transports = [];
transports.push(new winston.transports.Console());

const loggerInstance = winston.createLogger({
  level: log.level,
  format: winston.format.simple(),
  transports,
});

module.exports = loggerInstance;
