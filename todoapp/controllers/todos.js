const todoService = require('../services/todo');

const getAllTodos = async (req, res) => {
  const todos = await todoService.getAll();
  res.render('todos/index', { title: 'Todos', todos: todos });
}

const getAllTodosRESTful = async (req, res) => {
  const todos = await todoService.getAll();
  res.send({ success: true, data: todos, error: null });
}

const addTodoForm = (req, res) => {
  res.render('todos/add', { title: 'Add todo' });
}

const addTodo = async (req, res) => {
  const todo = req.body.todo;
  if(!todo) {
    return res.json({ success: false, data: null, error: new Error('Todo name is required')})
  }
  
  if(todo.trim().length === 0) {
    return res.json({ success: false, data: null, error: new Error('Todo name is required')})
  }

  await todoService.createTodo(todo);
  res.redirect('/todos');
}

const addTodoRESTful = async (req, res) => {
  const todo = req.body.todo;
  if(!todo) {
    res.statusCode = 400;
    return res.json({ success: false, data: null, error: 'Todo name is required'})
  }
  
  if(todo.trim().length === 0) {
    res.statusCode = 400;
    return res.json({ success: false, data: null, error: 'Todo name is required'})
  }
  try {
    const newTodo = await todoService.createTodo(todo);
    res.statusCode = 201;
    return res.json({ success: true, data: newTodo, error: null });
  } catch (error) {
    return res.json({ success: false, data: null, error });
  }
}

const getTodoByIdRESTful = async (req, res) => {
  const todoId = req.params.todoId;
  try {
    const todo = await todoService.getTodoById(todoId);
    return res.send({ success: true, data: todo, error: null });
  } catch (error) {
    return res.send({ success: false, data: null, error: error.toString() });    
  }
}

const updateTodoRESTful = async (req, res) => {
  const todo = req.body.todo;
  const todoId = req.params.todoId;
  if(!todo) {
    res.statusCode = 400;
    return res.json({ success: false, data: null, error: 'Todo name is required'})
  }
  
  if(todo.trim().length === 0) {
    res.statusCode = 400;
    return res.json({ success: false, data: null, error: 'Todo name is required'})
  }

  
  try {
    const todoExist = await todoService.getTodoById(todoId);
    if (!todoExist) {
      return res.json({ success: false, data: null, error: 'Invalid todo id' });
    }
    const updatedTodo = await todoService.updateTodo(todoId, todo);
    res.statusCode = 200;
    return res.json({ success: true, data: updatedTodo, error: null });
  } catch (error) {
    return res.json({ success: false, data: null, error });
  }
}

const deleteTodoRESTful = async (req, res) => {
  const todoId = req.params.todoId;
  try {
    const todoExist = await todoService.getTodoById(todoId);
    if (!todoExist) {
      return res.json({ success: false, data: null, error: 'Invalid todo id' });
    }
    await todoService.deleteTodo(todoId);
    res.statusCode = 200;
    return res.json({ success: true, data: todoExist, error: null });
  } catch (error) {
    return res.json({ success: false, data: null, error });
  }
}

module.exports = {
  getAllTodos: getAllTodos,
  addTodoForm,
  addTodo,
  getAllTodosRESTful,
  addTodoRESTful,
  getTodoByIdRESTful,
  updateTodoRESTful,
  deleteTodoRESTful
}