const mongoose = require("mongoose");
const connetDb = (url) => {
  mongoose.connect(url);
};

module.exports = connetDb;
