const connectDb = require("./db/connect");
const Product = require("./model/productModel");
const jsonProduct = require("./products.json");
require("dotenv").config();
const dbUri = process.env.DB_URI;

const start = async () => {
  try {
    //DB Connection
    await connectDb(dbUri);
    await Product.create(jsonProduct);
    console.log("success!!");
    process.exit();
  } catch (error) {
    console.log(error);
  }
};

start();
