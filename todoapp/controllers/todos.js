const todos = [{ id: 1, todo: 'Learn Javascript'}, { id: 2, todo: 'Learn Nodejs'}];

const getAllTodos = (req, res) => {
  res.render('todos/index', { title: 'Todos', todos: todos });
}

const addTodoForm = (req, res) => {
  res.render('todos/add', { title: 'Add todo' });
}

const addTodo = (req, res) => {
  const newTodo = {
    id: todos.length + 1,
    todo: req.body.todo
  }
  todos.push(newTodo);
  res.redirect('/todos');
}

module.exports = {
  getAllTodos: getAllTodos,
  addTodoForm,
  addTodo,
}