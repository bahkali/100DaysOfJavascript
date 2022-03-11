"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePost = exports.updatePost = exports.getPost = exports.createPost = exports.getPosts = void 0;
const feedModels_1 = __importDefault(require("../models/feedModels"));
const check_1 = require("express-validator/check");
const getPosts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const posts = yield feedModels_1.default.find({});
        res.status(200).json({
            posts: posts,
        });
    }
    catch (err) { }
});
exports.getPosts = getPosts;
const createPost = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const errors = (0, check_1.validationResult)(req);
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
        const result = yield feedModels_1.default.create({
            title: title,
            content: content,
            imageUrl: "/images/cheeseburger.png",
            creator: { name: "Kaly Bah" },
        });
        res.status(201).json({
            message: "Post created successfully!",
            post: result,
        });
    }
    catch (err) {
        console.log(err);
        next(err);
    }
});
exports.createPost = createPost;
const getPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id: id } = req.params;
        const post = yield feedModels_1.default.findById({ _id: id });
        post.imageUrl = post.imageUrl.replace(/\\\\/g, "/");
        if (!post) {
            const error = new Error("Could not find post");
            throw error;
        }
        res.status(200).json({
            post: post,
        });
    }
    catch (err) {
        console.log({ error: err });
    }
});
exports.getPost = getPost;
const updatePost = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const errors = (0, check_1.validationResult)(req);
        if (!errors.isEmpty()) {
            const error = new Error("Validation failed, entered data is incorrect.");
            throw error;
        }
        const { id: id } = req.params;
        const { title, content } = req.body;
        // handle the image url here
        // Update the database
        const result = yield feedModels_1.default.findByIdAndUpdate({ _id: id }, {
            title: title,
            content: content,
            imageUrl: "/images/cheeseburger.png",
            creator: { name: "Kaly Bah" },
        });
        res.status(200).json({ message: "Post updated!", post: result });
    }
    catch (error) {
        next(error);
    }
});
exports.updatePost = updatePost;
const deletePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id: id } = req.params;
        const result = yield feedModels_1.default.findByIdAndDelete({ _id: id });
        res.status(200).json({
            post: "Post deleted",
        });
    }
    catch (err) {
        console.log({ error: err });
    }
});
exports.deletePost = deletePost;
// Need a method to clear image in file
