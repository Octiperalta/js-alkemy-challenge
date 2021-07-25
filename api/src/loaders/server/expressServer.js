const express = require("express");
const config = require("../../config");
const morgan = require("morgan");
const logger = require("../logger");

class ExpressServer {
  constructor() {
    this.app = express();
    this.port = config.port;
    this.basePath = `${config.api.prefix}/test`;
    this.basePathAuth = `${config.api.prefix}/auth`;

    this._middlewares();
    this._routes();
    this._notFound();
    this._errorHandler();
  }

  _middlewares() {
    this.app.use(express.json());
    this.app.use(morgan("tiny"));
  }

  _routes() {
    this.app.use(this.basePath, require("../../routes/test"));
    this.app.use(this.basePathAuth, require("../../routes/auth"));
  }

  _notFound() {
    this.app.use((req, res, next) => {
      const error = new Error("Not found");
      error.status = 404;
      error.code = 404;
      next(error);
    });
  }

  _errorHandler() {
    this.app.use((err, req, res, next) => {
      const code = err.code || 500;
      logger.error(
        `${code} - ${err.message} - ${req.originalUrl} - ${req.method}`
      );

      const errorJSON = {
        error: {
          code,
          message: err.message,
          detail: err.data,
        },
      };

      res.status(code).json(errorJSON);
    });
  }

  async start() {
    this.app.listen(this.port, error => {
      if (error) {
        logger.error(error);
        process.exit(1);
      }
    });
  }
}

module.exports = ExpressServer;
