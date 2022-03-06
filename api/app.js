// Create server Express

// Define endpoint for ToDos
// GET fetch all ToDos
// POST Create new ToDo
// PATCH Update ToDo given an ID
// DELETE Delete ToDo given an ID (destroy or soft delete)

// Establish a connection with a Database (Postgress)

// Create ToDo model
// Use the model to interact with the controller functions

// Must structure project with routes, controllers and models folders (utils)

// IMPORTANT: Prettier format

// Install cors library (npm i cors)
// app.use(cors())

const express = require('express');

const app = express();

app.use(express.urlencoded());
app.use(express.json());

/* EndPoints */
/* app.use('/api/v1/todos/'); */

app.listen(4002, () => {
  console.log('TODO api Running');
});
