const { Router } = require("express");
const { signup, login } = require("../controllers/auth");
const { signupValidations, loginValidations } = require("../middlewares/auth");

const router = Router();

router.post("/signup", signupValidations, signup);
router.post("/login", loginValidations, login);

module.exports = router;
