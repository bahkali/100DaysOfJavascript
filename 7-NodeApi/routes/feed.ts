import { Router } from "express";
import {
  getPosts,
  createPost,
  getPost,
  updatePost,
  deletePost,
} from "../controllers/feedControllers";
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
router
  .route("/post/:id")
  .get(getPost)
  .put(
    [
      body("title").trim().isLength({ min: 5 }),
      body("content").trim().isLength({ min: 5 }),
    ],
    updatePost
  )
  .delete(deletePost);

export default router;
