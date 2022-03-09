const Product = require("../model/productModel");

// Get all products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ products });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
// Get a product
const getProduct = async (req, res) => {
  try {
    const { id: id } = req.params;
    const product = await Product.findById({ _id: id });
    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
// ADD a product
const AddProduct = async (req, res) => {
  try {
    const product = req.body;
    const result = Product.create(product);
    res.status(200).json("Product added");
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
// UPDATE a product
const UpdateProduct = async (req, res) => {
  try {
    const { id: id } = req.params;
    const product = req.body;
    const result = await Product.findByIdAndUpdate({ _id: id }, product, {
      new: true,
      runValidators: true,
      r,
    });
    res.status(200).json({ result });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
// DELETE A product
const DeleteProducts = async (req, res) => {
  try {
    const { id: id } = req.params;
    const product = await Product.findByIdAndDelete({ _id: id });
    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getProducts,
  AddProduct,
  UpdateProduct,
  getProduct,
  DeleteProducts,
};
