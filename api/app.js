const express = require('express');

// Models
const { Todo } = require('./models/todo.model');

// Routers
const { todoRouter } = require('./routes/todo.routes');

// Utils
const { sequelize } = require('./util/database');

// Init express app
const app = express();

// Enable JSON incoming data
app.use(express.json());

// EndPoints
app.use('/api/v1/todos/', todoRouter);

sequelize
  .authenticate()
  .then(() => console.log('Database authenticated'))
  .catch((err) => console.log(err));

sequelize
  .sync({ force: true })
  .then(() => console.log('Database synced'))
  .catch((err) => console.log(err));

app.listen(4002, () => {
  console.log('TODO api Running');
});
