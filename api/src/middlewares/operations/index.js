const { validJWT } = require("../auth");
const { customValidationResult: validationResult } = require("../commons");
const { check } = require("express-validator");
const AppError = require("../../error/appError");

const TYPES = ["INCOME", "OUTFLOW"];

const _requiredDescription = check(
  "description",
  "Description field is required"
).notEmpty();
const _requiredAmount = check("amount", "Amount field is required").notEmpty();
const _numericAmount = check(
  "amount",
  "Amount field must be numeric"
).isNumeric();
const _requiredOperationType = check(
  "operationType",
  "Operation type field is required"
).notEmpty();
const _validOperationType = check("operationType").custom(async (type = "") => {
  if (!TYPES.includes(type.toUpperCase())) {
    throw new AppError("Invalid operation type", 400);
  }
});

const getOperationValidations = [validJWT, validationResult];
const createOperationValidations = [
  validJWT,
  _requiredDescription,
  _requiredAmount,
  _numericAmount,
  _requiredOperationType,
  _validOperationType,
  validationResult,
];

module.exports = { getOperationValidations, createOperationValidations };
