"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPost = exports.createPost = exports.getPosts = void 0;
const getPosts = (req, res) => {
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
exports.getPosts = getPosts;
const createPost = (req, res, next) => {
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
exports.createPost = createPost;
const getPost = (req, res) => {
    const { id: id } = req.params;
    res.status(200).json({
        posts: [{ title: "First Post", content: "Hello there" }],
    });
};
exports.getPost = getPost;
