const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: [true, "Please provide a title"],
  },
  author: {
    type: String,
  },
  content: {
    type: String,
    maxlength: [500, "the limit is 500 character. Keep it short"],
  },
  liked: {
    type: Boolean,
  },
  createDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Post", postSchema);
