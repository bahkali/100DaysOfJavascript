import { Request, Response } from "express";
import { validationResult } from "express-validator/check";

export const getPosts = (req: Request, res: Response) => {
  res.status(200).json({
    posts: [
      {
        _id: "1",
        title: "First Post",
        content: "Hello there",
        imageUrl: "images/cheeseburger.png",
        creator: {
          name: "Kaly Bah",
        },
        createdAt: new Date(),
      },
    ],
  });
};

export const createPost = (req: Request, res: Response, next: any) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      message: "Validation failed, entered data is incorrect.",
      errors: errors.array(),
    });
  }
  const { title, content } = req.body;
  res.status(201).json({
    message: "Post created successfully!",
    post: {
      _id: new Date().toISOString(),
      title: title,
      content: content,
      creator: { name: "Kaly Bah" },
      createdAt: new Date(),
    },
  });
};

export const getPost = (req: Request, res: Response) => {
  const { id: id } = req.params;
  res.status(200).json({
    posts: [{ title: "First Post", content: "Hello there" }],
  });
};
