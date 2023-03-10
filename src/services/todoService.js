const Todo = require("../models/todoModel");
const Category = require("../models/categoryModel");
const User = require("../models/userModel");

class TodoService {
  static async create(data) {
    try {
      const newTodo = await Todo.create(data);
      return newTodo;
    } catch (error) {
      throw error;
    }
  }
  static async list() {
    try {
      const listTodos = await Todo.findAll({
        attributes: ["id", "title", "description", "status",],
        include: [
          {
            model: Category,
            attributes: ["id", "name"],
          },
          {
            model: User,
            attributes: ["id", "username", "email"],
          },
        ],
      });
      return listTodos;
    } catch (error) {
      throw error;
    }
  }
  static async detail(id) {
    try {
      const todo = await Todo.findByPk(id, {
        attributes: { exclude: ["categoryId", "userId"] },
        include: [
          {
            model: Category,
            attributes: ["id", "name"],
          },
          {
            model: User,
            attributes: ["id", "username", "email"],
          },
        ],
      });
      return todo;
    } catch (error) {
      throw error;
    }
  }
  static async update(id, data) {
    try {
      const todo = await Todo.update(data, {
        where: { id },
      });
      return todo;
    } catch (error) {
      throw error;
    }
  }
  static async delete(id) {
    try {
      const todo = await Todo.destroy({
        where: { id },
      });
      return todo;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = TodoService;
