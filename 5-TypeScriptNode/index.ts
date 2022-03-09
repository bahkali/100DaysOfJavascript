import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import { routes } from "./src/routes/crmRoutes";
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;
const DB_URI = process.env.DB_URI || " ";

// mongoose connection
mongoose.connect(DB_URI).then((result) => {
  console.log("DB connected..");
});
// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send(`Node and express server is running on ports ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Node and express server is running on ports ${PORT}`);
});
