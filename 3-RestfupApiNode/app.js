require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const postRoute = require("./route/postRoute");

const app = express();

// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB connection
const dbUri = process.env.DB_URI;
mongoose.Promise = global.Promise;
mongoose.connect(dbUri).then(() => {
  console.log("Database connected...");
});
// routes
// app.get("/", (req, res) => {
//   res.send("Test app js");
// });
app.use("/post", postRoute);

const PORT = 4000 || process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
