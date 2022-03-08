// Get all products
const getProducts = async (req, res) => {
  try {
    res.status(200).json("All Products");
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
// Get a product
const getProduct = async (req, res) => {
  try {
    res.status(200).json("One Products");
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
// ADD a product
const AddProduct = async (req, res) => {
  try {
    res.status(200).json("Add Products");
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
// UPDATE a product
const UpdateProduct = async (req, res) => {
  try {
    res.status(200).json("Update Products");
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
// DELETE A product
const DeleteProducts = async (req, res) => {
  try {
    res.status(200).json("delete Product");
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
