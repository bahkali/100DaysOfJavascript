import { Router } from "express";
import { getPosts, createPost } from "../controllers/feedControllers";
import { body } from "express-validator/check";

const router = Router();

router
  .route("/post")
  .get(getPosts)
  .post(
    [
      body("title").trim().isLength({ min: 5 }),
      body("content").trim().isLength({ min: 5 }),
    ],
    createPost
  );
router.route("/post/:id").get().patch().delete();

export default router;
