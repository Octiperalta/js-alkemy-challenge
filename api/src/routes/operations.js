const { Router } = require("express");
const router = Router();
const {
  getOperations,
  createOperation,
  updateOperation,
  deleteOperation,
} = require("../controllers/operations");
const {
  getOperationValidations,
  createOperationValidations,
  updateOperationValidations,
  deleteOperationValidations,
} = require("../middlewares/operations");

router.get("/", getOperationValidations, getOperations);
router.post("/", createOperationValidations, createOperation);
router.put("/:id", updateOperationValidations, updateOperation);
router.delete("/:id", deleteOperationValidations, deleteOperation);

module.exports = router;
