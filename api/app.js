const express = require('express');

// Models

// Routers

// Utils
const { sequelize } = require('./utils/database');

const app = express();

app.use(express.urlencoded());
app.use(express.json());

sequelize
  .authenticate()
  .then(() => console.log('Database authenticated'))
  .catch((err) => console.log(err));

/* EndPoints */
/* app.use('/api/v1/todos/', todoRouter); */

sequelize
  .sync({ force: true })
  .then(() => console.log('Database synced'))
  .catch((err) => console.log(err));

app.listen(4002, () => {
  console.log('TODO api Running');
});
