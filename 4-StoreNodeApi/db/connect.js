const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const connetDb = (url) => {
  return mongoose.connect(url);
};

module.exports = connetDb;
