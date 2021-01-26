const express = require("express");
const mongoose = require("mongoose");

const app = express();

const port = 3010;

mongoose
  .connect(
    "mongodb+srv://admin:p@ssw0rd@cluster0.axtok.mongodb.net/todolist?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("connected mongoDb");
  })
  .catch(error => {
    console.error(error);
  });

app.get("/", (req, res) => {
  res.send("Hello express");
});

app.listen(port, () => {
  console.log(`server listen port... Port ${port}`);
});
