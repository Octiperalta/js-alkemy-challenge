const operationService = require("../services/operationService");

const getOperations = async (req, res, next) => {
  try {
    const queryParms = req.query;
    const { id } = req.user;
    const operations = await operationService.findOperations(id, queryParms);
    res.json({ status: "OK", data: operations });
  } catch (err) {
    next(err);
  }
};

module.exports = { getOperations };
