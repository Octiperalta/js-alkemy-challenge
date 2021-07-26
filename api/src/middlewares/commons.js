const { validationResult } = require("express-validator");
const AppError = require("../error/appError");

const customValidationResult = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    throw new AppError("Validation failed", 400, errors.errors);
  }

  next();
};

module.exports = { customValidationResult };
