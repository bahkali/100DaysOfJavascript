require("dotenv").config();
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const dbUri = process.env.DB_URI;
//DB Connection
mongoose.connect(dbUri).then((res) => {
  console.log(`Database is connected..`);
});

//Middelware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Routes
app.use("/", (req, res) => {
  res.send("Index msg...");
});

// Listen
const PORT = 4500 || process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
