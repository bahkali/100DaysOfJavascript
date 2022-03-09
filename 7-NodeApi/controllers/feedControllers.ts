import { Request, Response } from "express";
import Post from "../models/feedModels";
import { validationResult } from "express-validator/check";

export const getPosts = async (req: Request, res: Response) => {
  const posts = await Post.find({});
  res.status(200).json({
    posts: posts,
  });
};

export const createPost = async (req: Request, res: Response, next: any) => {
  const errors = validationResult(req);
  const { title, content } = req.body;
  const result = await Post.create({
    title: title,
    content: content,
    imageUrl: "images/cheeseburger.png",
    creator: { name: "Kaly Bah" },
  });

  if (!errors.isEmpty()) {
    return res.status(422).json({
      message: "Validation failed, entered data is incorrect.",
      errors: errors.array(),
    });
  }
  res.status(201).json({
    message: "Post created successfully!",
    post: result,
  });
};

export const getPost = (req: Request, res: Response) => {
  const { id: id } = req.params;
  res.status(200).json({
    posts: [{ title: "First Post", content: "Hello there" }],
  });
};
