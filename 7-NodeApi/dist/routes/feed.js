"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const feedControllers_1 = require("../controllers/feedControllers");
const router = (0, express_1.Router)();
router.route("/post").get(feedControllers_1.getPosts).post(feedControllers_1.createPost);
router.route("/post/:id").get().patch().delete();
exports.default = router;
