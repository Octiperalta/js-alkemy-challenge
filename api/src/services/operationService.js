const OperationRepository = require("../repositories/operationRepository");
const repository = new OperationRepository();

const findOperations = async (id, queryParams) => {
  return await repository.findOperations(id, queryParams);
};

module.exports = { findOperations };
