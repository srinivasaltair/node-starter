const express = require('express');
const routes = require('./routes/index');
// Create our express app
const app = express();

app.use('/', routes)
module.exports = app;