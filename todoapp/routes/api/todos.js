const express = require('express');
const router = express.Router();

const todosController = require('../../controllers/todos');

router.get('/', todosController.getAllTodosRESTful);
router.post('/', todosController.addTodoRESTful);
router.get('/:todoId', todosController.getTodoByIdRESTful);
router.put('/:todoId', todosController.updateTodoRESTful);
router.delete('/:todoId', todosController.deleteTodoRESTful);

module.exports = router;