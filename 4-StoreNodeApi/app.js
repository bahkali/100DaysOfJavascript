require("dotenv").config();
const express = require("express");
const path = require("path");
const connectDb = require("./db/connect");
const bodyParser = require("body-parser");
//routes
const productRoute = require("./route/productRoute");

const app = express();
const dbUri = process.env.DB_URI;

//Middelware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Routes
app.use("/api/v1/products", productRoute);

// Error handling

// Listen
const PORT = process.env.PORT || 4500;

const start = async () => {
  try {
    //DB Connection
    await connectDb(dbUri);
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  } catch (error) {}
};

start();
