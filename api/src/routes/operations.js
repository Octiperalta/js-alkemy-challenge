const { Router } = require("express");
const router = Router();
const { getOperations, createOperation } = require("../controllers/operations");
const {
  getOperationValidations,
  createOperationValidations,
} = require("../middlewares/operations");

router.get("/", getOperationValidations, getOperations);
router.post("/", createOperationValidations, createOperation);

module.exports = router;
