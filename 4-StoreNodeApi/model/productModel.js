const mongoose = require("mongoose");
const ProdutSchema = new mongoose.Schema({
  name: { type: String },
  featured: { type: Boolean },
  rating: { type: Number },
  createdAt: { type: Date, default: Date.now },
  price: { type: Number },
  company: { type: String },
});

module.exports = mongoose.model("Product", ProdutSchema);
