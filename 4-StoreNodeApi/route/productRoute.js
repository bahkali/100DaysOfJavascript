const express = require("express");
// controllers
const {
  getProducts,
  AddProduct,
  UpdateProduct,
  getProduct,
  DeleteProducts,
} = require("../controller/productController");
const productRoute = express.Router();

productRoute.route("/").get(getProducts).post(AddProduct);
productRoute
  .route("/:id")
  .get(getProduct)
  .patch(UpdateProduct)
  .delete(DeleteProducts);

module.exports = productRoute;
