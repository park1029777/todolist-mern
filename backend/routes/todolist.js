const express = require("express");

const Todo = require("../models/todolist");

const router = express.Router();

// POST todo
// Create todo  // 비동기
router.post("/", async (req, res) => {
  try {
    const { title } = req.body;
    const newTodo = await Todo.create({ title });
    res.send(newTodo);
  } catch (error) {
    console.error(error);
  }
});

// GET todo
// Read todos
router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.send(todos);
  } catch (error) {
    console.error(error);
  }
});

// GET todo/:id
// Read todo
router.get("/:title", async (req, res) => {
  try {
    // const todo = await Todo.findById(req.params.id);
    const { title } = req.params;
    const todo = await Todo.findOne({ title });
    res.send(todo);
  } catch (error) {
    console.error(error);
  }
});

// PATCH todo/:id
// Update todo
router.patch("/:id", async (req, res) => {
  try {
    const { title } = req.body;

    await Todo.findByIdAndUpdate(req.params.id, {
      title,
    });
    const updateTodo = await Todo.findByIdAndUpdate(req.params.id);
    res.send(updateTodo);
  } catch (error) {
    console.error(error);
  }
});

// DELETE todo/:id
// DELETE todo
router.delete("/:id", async (req, res) => {
  try {
    const deleteTodo = await Todo.findByIdAndRemove(req.params.id);
    res.send(deleteTodo);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
