const { Router } = require("express");
const {
  createTodo,
  deleteTodo,
  detailTodo,
  listTodo,
  updateTodo,
} = require("../controllers/todoControllers");
const router = Router();

router.get("/api/v1/todos", listTodo);
router.get("/api/v1/todos/:id", detailTodo);
router.post("/api/v1/todos", createTodo);
router.put("/api/v1/todos/:id", updateTodo);
router.delete("/api/v1/todos/:id", deleteTodo);

module.exports = router;
