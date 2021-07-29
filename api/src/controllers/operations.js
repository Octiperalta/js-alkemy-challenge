const operationService = require("../services/operationService");

const getOperations = async (req, res, next) => {
  try {
    const queryParams = req.query;
    const { id } = req.user;
    const operations = await operationService.findOperations(id, queryParams);
    res.json({ status: "OK", data: operations });
  } catch (err) {
    next(err);
  }
};

const createOperation = async (req, res, next) => {
  try {
    const newOperation = { ...req.body, userId: req.user.id };
    await operationService.create(newOperation);

    res.status(201).json({
      status: "OK",
      detail: "Operation created successfully",
    });
  } catch (err) {
    next(err);
  }

  res.status(200).end();
};

const updateOperation = async (req, res, next) => {
  const { id } = req.params;

  const operation = { ...req.body, operation_id: id };

  try {
    await operationService.update(operation);

    res.status(201).json({
      status: "OK",
      detail: "Operation updated successfully",
    });
  } catch (err) {
    next(err);
  }
};

const deleteOperation = async (req, res, next) => {
  const { id } = req.params;
  try {
    await operationService.remove(id);
    res.status(201).json({
      status: "OK",
      detail: "Operation deleted successfully",
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getOperations,
  createOperation,
  updateOperation,
  deleteOperation,
};
