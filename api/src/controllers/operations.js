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
    throw err;
  }

  res.status(200).end();
};

module.exports = { getOperations, createOperation };
