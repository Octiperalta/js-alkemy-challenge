const { Router } = require("express");
const { signup } = require("../controllers/auth");
const { signupValidations } = require("../middlewares/auth");

const router = Router();

router.post("/signup", signupValidations, signup);

module.exports = router;
