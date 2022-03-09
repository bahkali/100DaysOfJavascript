import bodyParser from "body-parser";
import express from "express";
import feedRoutes from "./routes/feed";

const app = express();
const PORT = process.env.PORT || 5000;

// MIDDELWARE

// BODYPARSER
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// SET CORS HEADER
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// ROUTES
app.use("/feed", feedRoutes);
// ERROR HANDLER

// Listen
app.listen(PORT, () => {
  console.log(`---> Server is listening on port ${PORT}...`);
});
