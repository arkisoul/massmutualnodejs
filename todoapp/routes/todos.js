const express = require("express");
const router = express.Router();

const todosController = require('../controllers/todos');

router.get("/", todosController.getAllTodos)
router.get("/add", todosController.addTodoForm)
router.post("/", todosController.addTodo)

module.exports = router;