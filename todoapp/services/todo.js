const TodoModel = require('../models/todo');

const getAll = async () => {
  const todos = await TodoModel.find({});
  return todos;
}

const getTodoById = async (id) => {
  const todo = await TodoModel.findById(id);
  return todo;
}

const createTodo = async (todo) => {
  // const newTodo = new TodoModel({ todo });
  // await newTodo.save();
  const newTodo = await TodoModel.create({ todo });
  return newTodo;
}

const updateTodo = async (todoId, todo) => {
  return await TodoModel.findByIdAndUpdate(todoId, { todo: todo }, { new: true })
}

const deleteTodo = async (todoId) => {
  return await TodoModel.findByIdAndRemove(todoId);
}

module.exports = {
  getAll,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
}
