const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const postRoute = require("./route/postRoute");
const app = express();

// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes
// app.get("/", (req, res) => {
//   res.send("Test app js");
// });
app.use(postRoute);

const PORT = 4000 || process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
