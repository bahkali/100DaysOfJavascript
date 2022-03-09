import express from "express";
import bodyParser from "body-parser";
import todosRoutes from "./routes/todos";

const app = express();

// bodyparser
app.use(bodyParser.json());

// Routes
app.use(todosRoutes);

app.use("/", (req, res) => {
  res.send("Hello Typescript");
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
