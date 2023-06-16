const express = require("express");
const validator = require("../middlewares/validator");
const authSchema = require("../validations/authSchema");
const authControler = require("../controllers/authController");
const router = express.Router();

router.post(
    "/register",
    validator(authSchema.registerSchema),
    authControler.register
);

router.post("/login", validator(authSchema.loginSchema), authControler.login);

module.exports = router;
