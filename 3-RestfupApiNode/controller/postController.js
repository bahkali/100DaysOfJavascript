const Post = require("../Models/postModel");

const getPost = async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getSinglePost = async (req, res) => {
  try {
    const { id: id } = req.params;
    const post = await Post.findById({ _id: id });
    res.status(200).json({ post });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const addPost = async (req, res) => {
  try {
    const post = req.body;
    const result = await Post.create(post);
    res.status(200).json(`post added`);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updatePost = async (req, res) => {
  try {
    const { id: id } = req.params;
    const post = req.body;
    const result = await Post.findByIdAndUpdate({ _id: id }, post, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({ result });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const deletePost = async (req, res) => {
  try {
    const { id: id } = req.params;
    const result = await Post.findByIdAndDelete({ _id: id });
    res.status(200).json(`Post deleted ${result}`);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = { getPost, getSinglePost, addPost, updatePost, deletePost };
