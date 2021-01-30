const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");

const todoRoutes = require("./routes/todolist");

const app = express();

const port = 3010;

mongoose
  .connect(
    "mongodb+srv://admin:p@ssw0rd@cluster0.axtok.mongodb.net/todolist?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
  )
  .then(() => {
    console.log("connected mongoDb");
  })
  .catch(error => {
    console.error(error);
  });

app.use(morgan("dev"));
app.use(express.json());
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Hello express");
});

app.use("/todo", todoRoutes);

app.listen(port, () => {
  console.log(`server listen port... Port ${port}`);
});
