const express = require('express');

// Controllers

const {
  getAllTodos,
  addTodo,
  editTodo,
  deleteTodo
} = require('../controllers/todo.controller');

const router = express.Router();

router.get('/', getAllTodos);

router.post('/', addTodo);

router.patch('/:id', editTodo);

router.delete('/:id', deleteTodo);

module.exports = { todoRouter: router };
