const { validJWT } = require("../auth");
const { customValidationResult: validationResult } = require("../commons");

const getOperationValidations = [validJWT, validationResult];

module.exports = { getOperationValidations };
