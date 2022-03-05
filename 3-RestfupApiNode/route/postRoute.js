const {
  getPost,
  getSinglePost,
  addPost,
  updatePost,
  deletePost,
} = require("../controller/postController");

const express = require("express");
const routes = express.Router();

routes.route("/").get(getPost).post(addPost);
routes.route("/:id").get(getSinglePost).patch(updatePost).delete(deletePost);

module.exports = routes;
