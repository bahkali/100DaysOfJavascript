import bodyParser from "body-parser";
import express from "express";
import { connectDB } from "./db/connect";
import feedRoutes from "./routes/feed";
import multer from "multer";
import { uuid } from "uuidv4";
import path from "path";

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// File Upload Setup
const fileStorage = multer.diskStorage({
  destination: "./images/",
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + uuid() + path.extname(file.originalname));
  },
});
const fileFilter = (req: any, file: any, cb: any) => {
  if (
    file.minetype === "image/png" ||
    file.minetype === "image/jpg" ||
    file.minetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

// BODYPARSER
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// MIDDELWARE
app.use(
  multer({ storage: fileStorage, fileFilter: fileFilter }).single("image")
);
app.use("/images", express.static(path.join(__dirname, "images")));

// SET CORS HEADER
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// ROUTES
app.use("/feed", feedRoutes);

// ERROR HANDLER

// Listen
const url = process.env.DB_URI || "";
const start = async () => {
  try {
    await connectDB(url);
    app.listen(PORT, () => {
      console.log(`---> Server is listening on port ${PORT}...`);
    });
  } catch (error) {
    console.log({ msg: error });
  }
};

start();
