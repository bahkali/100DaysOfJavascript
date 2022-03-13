"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const check_1 = require("express-validator/check");
const authController_1 = require("../controllers/authController");
const router = (0, express_1.Router)();
router.route("/").get();
router
    .route("/signup")
    .post([
    (0, check_1.body)("email")
        .isEmail()
        .withMessage("Please enter a valid email.")
        .normalizeEmail(),
    (0, check_1.body)("password").trim().isLength({ min: 5 }),
    (0, check_1.body)("name").trim().not().isEmpty(),
], authController_1.signup);
router.route("/login").post(authController_1.login);
exports.default = router;
