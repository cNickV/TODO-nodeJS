// Models
const { Todo } = require('../models/todo.model');

exports.getAllTodos = async (req, res) => {
  try {
    const todoDb = await Todo.findAll({
      where: {
        status: 'active'
      }
    });
    res.status(200).json({
      status: 'success',
      data: { todos: todoDb }
    });
  } catch (err) {
    console.error(err);
  }
};

exports.addTodo = async (req, res) => {
  try {
    const { content } = req.body;

    const newContent = await Todo.create({ content: content });

    res.status(201).json({
      status: 'success',
      data: { newContent }
    });
  } catch (err) {
    console.error(err);
  }
};

exports.editTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const data = filterTodo(req.body, 'content');

    const todo = await todos.findOne({
      where: {
        id: id
      }
    });

    if (!todo) {
      res.status(404).json({
        status: 'error',
        message: 'Cant edit TODO, invalid ID'
      });
    }

    await todo.update({ ...data });

    res.status(204).json({
      status: 'success'
    });
  } catch (err) {
    console.error(err);
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await todo.findOne({
      where: {
        id: id
      }
    });

    if (!todo) {
      res.status(404).json({
        status: 'error',
        message: 'Cant delete TODO, invalid ID'
      });
    }

    await todo.update({ status: 'deleted' });

    res.status(204).json({
      status: 'success'
    });
  } catch (err) {
    console.error(err);
  }
};
