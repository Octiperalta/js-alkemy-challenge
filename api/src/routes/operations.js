const { Router } = require("express");
const router = Router();
const { getOperations } = require("../controllers/operations");
const { getOperationValidations } = require("../middlewares/operations");

router.get("/", getOperationValidations, getOperations);

module.exports = router;
