import { Router } from "express";
import { body } from "express-validator/check";
import { signup } from "../controllers/authController";
const router = Router();

router.route("/").get();
router
  .route("/signup")
  .post(
    [
      body("email")
        .isEmail()
        .withMessage("Please enter a valid email.")
        .normalizeEmail(),
      body("password").trim().isLength({ min: 5 }),
      body("name").trim().not().isEmpty(),
    ],
    signup
  );

export default router;
