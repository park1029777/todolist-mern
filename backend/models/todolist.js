const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  contents: { type: String },
});

const Todo = mongoose.model("todo", TodoSchema);

module.exports = Todo;
