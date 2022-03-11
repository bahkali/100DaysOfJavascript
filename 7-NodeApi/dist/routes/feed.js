"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const feedControllers_1 = require("../controllers/feedControllers");
const check_1 = require("express-validator/check");
const router = (0, express_1.Router)();
router
    .route("/post")
    .get(feedControllers_1.getPosts)
    .post([
    (0, check_1.body)("title").trim().isLength({ min: 5 }),
    (0, check_1.body)("content").trim().isLength({ min: 5 }),
], feedControllers_1.createPost);
router
    .route("/post/:id")
    .get(feedControllers_1.getPost)
    .put([
    (0, check_1.body)("title").trim().isLength({ min: 5 }),
    (0, check_1.body)("content").trim().isLength({ min: 5 }),
], feedControllers_1.updatePost)
    .delete(feedControllers_1.deletePost);
exports.default = router;
