const OperationRepository = require("../repositories/operationRepository");
const repository = new OperationRepository();

const findOperations = async (id, queryParams) => {
  return await repository.findOperations(id, queryParams);
};

const create = async operation => {
  return await repository.create(operation);
};

module.exports = { findOperations, create };
