const TodoService = require("../services/todoService");

const createTodo = async (req, res) => {
  try {
    const data = req.body;
    const newTodo = await TodoService.create(data);
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(400).json(error);
  }
};

const listTodo = async (req, res) => {
  try {
    const listTodos = await TodoService.list();
    res.status(200).json(listTodos);
  } catch (error) {
    res.status(400).json(error);
  }
};

const detailTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await TodoService.detail(id);
    res.status(200).json(todo);
  } catch (error) {
    res.status(400).json(error);
  }
};

const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    await TodoService.update(id, data);
    res.status(204).send();
  } catch (error) {
    res.status(400).json(error);
  }
};

const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    await TodoService.delete(id);
    res.status(204).send();
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = { createTodo, listTodo, detailTodo, updateTodo, deleteTodo };
