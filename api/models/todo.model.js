const { DataTypes } = require('sequelize');

// utils

const { sequelize } = require('../utils/dataBase');

const Todo = sequelize.define('todo', {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true
  },
  content: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  status: {
    type: DataTypes.STRING(10),
    allowNull: false,
    defaultValue: 'active'
  }
});

module.exports = { Todo };
