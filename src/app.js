const express = require('express');
const app = express();

const taskRoutes = require('./routes/tasks');
app.use('/entregas', taskRoutes);

module.exports = app;