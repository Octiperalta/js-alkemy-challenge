const { Router } = require("express");
const router = Router();
const { test } = require("../controllers/test");

router.get("/", test);

module.exports = router;
