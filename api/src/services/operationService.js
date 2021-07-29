const OperationRepository = require("../repositories/operationRepository");
const repository = new OperationRepository();

const findOperations = async (id, queryParams) => {
  return await repository.findOperations(id, queryParams);
};

const create = async operation => {
  return await repository.create(operation);
};

const update = async operation => {
  return await repository.update(operation);
};

const remove = async id => {
  return await repository.remove(id);
};

const findById = async id => {
  return await repository.findById(id);
};

module.exports = { findOperations, create, update, findById, remove };
