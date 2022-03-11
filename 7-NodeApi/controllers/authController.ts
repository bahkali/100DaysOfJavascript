import User from "../models/userModels";
import { Request, Response } from "express";
import { validationResult } from "express-validator";
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

    // Encrypt
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
