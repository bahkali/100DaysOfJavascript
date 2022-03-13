import User from "../models/userModels";
import { Request, Response } from "express";
import { validationResult } from "express-validator";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const signup = async (req: Request, res: Response, next: any) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const error = new Error("Validation failed");
      throw error;
    }
    const { email, name, password } = req.body;
    // Check if user already exist
    User.findOne({ email: email }).then((userDoc) => {
      if (userDoc) {
        const error = new Error("Email address already exists!");
        throw error;
      }
    });

    // Encrypt password
    const salt = await bcrypt.genSaltSync(10);
    const hashPassword = await bcrypt.hashSync(password, salt);

    // save
    const result = await User.create({
      email: email,
      password: hashPassword,
      name: name,
    });
    res.status(200).json({ msg: "User created!", user: result });
  } catch (err) {
    next(err);
  }
};

export const login = async (req: Request, res: Response, next: any) => {
  try {
    const { email, password } = req.body;
    //check if user exist
    const user = await User.findOne({ email: email });
    if (!user) {
      const error = new Error("User with this email could not be found.");
      throw error;
    }
    // check password
    const pwdMatch = await bcrypt.compareSync(password, user.password);
    if (!pwdMatch) {
      const error = new Error("Wrong password!");
      throw error;
    }
    // Generate new token
    const token = jwt.sign(
      {
        email: user.email,
        userId: user._id.toString(),
      },
      "supersecret",
      { expiresIn: "1h" }
    );

    // send the token to the frontend
    res.status(200).json({ token: token, userId: user._id.toString() });
  } catch (error) {
    next(error);
  }
};
