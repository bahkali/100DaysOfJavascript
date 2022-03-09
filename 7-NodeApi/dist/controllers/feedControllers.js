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
exports.getPost = exports.createPost = exports.getPosts = void 0;
const feedModels_1 = __importDefault(require("../models/feedModels"));
const check_1 = require("express-validator/check");
const getPosts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const posts = yield feedModels_1.default.find({});
    res.status(200).json({
        posts: posts,
    });
});
exports.getPosts = getPosts;
const createPost = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, check_1.validationResult)(req);
    const { title, content } = req.body;
    const result = yield feedModels_1.default.create({
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
});
exports.createPost = createPost;
const getPost = (req, res) => {
    const { id: id } = req.params;
    res.status(200).json({
        posts: [{ title: "First Post", content: "Hello there" }],
    });
};
exports.getPost = getPost;
