import { Request, Response } from "express";
import Post from "../models/feedModels";
import { validationResult } from "express-validator/check";

export const getPosts = async (req: Request, res: Response) => {
  try {
    const posts = await Post.find({});
    res.status(200).json({
      posts: posts,
    });
  } catch (err) {}
};

export const createPost = async (req: Request, res: Response, next: any) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const error = new Error("Validation failed, entered data is incorrect.");
      throw error;
    }
    // if (!req.file) {
    //   const error = new Error("No image provided");
    //   throw error;
    // }
    const { title, content } = req.body;
    // const imageUrl = req.file.path.replace(/\\\\/g, "/");
    const result = await Post.create({
      title: title,
      content: content,
      imageUrl: "/images/cheeseburger.png",
      creator: { name: "Kaly Bah" },
    });

    res.status(201).json({
      message: "Post created successfully!",
      post: result,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

export const getPost = async (req: Request, res: Response) => {
  try {
    const { id: id } = req.params;
    const post = await Post.findById({ _id: id });
    post.imageUrl = post.imageUrl.replace(/\\\\/g, "/");
    if (!post) {
      const error = new Error("Could not find post");
      throw error;
    }
    res.status(200).json({
      post: post,
    });
  } catch (err) {
    console.log({ error: err });
  }
};

export const updatePost = async (req: Request, res: Response, next: any) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const error = new Error("Validation failed, entered data is incorrect.");
      throw error;
    }
    const { id: id } = req.params;
    const { title, content } = req.body;
    // handle the image url here
    // Update the database
    const result = await Post.findByIdAndUpdate(
      { _id: id },
      {
        title: title,
        content: content,
        imageUrl: "/images/cheeseburger.png",
        creator: { name: "Kaly Bah" },
      }
    );
    res.status(200).json({ message: "Post updated!", post: result });
  } catch (error) {
    next(error);
  }
};

export const deletePost = async (req: Request, res: Response) => {
  try {
    const { id: id } = req.params;
    const result = await Post.findByIdAndDelete({ _id: id });
    res.status(200).json({
      post: "Post deleted",
    });
  } catch (err) {
    console.log({ error: err });
  }
};

// Need a method to clear image in file
