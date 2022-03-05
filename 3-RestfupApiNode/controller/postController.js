const getPost = (req, res) => {
  res.send("All Posts");
};

const getSinglePost = (req, res) => {
  res.send("Single Post");
};

const addPost = (req, res) => {
  res.send("Post added");
};

const updatePost = (req, res) => {
  res.send("Post Updated");
};

const deletePost = (req, res) => {
  res.send("Post deleted");
};

module.exports = { getPost, getSinglePost, addPost, updatePost, deletePost };
