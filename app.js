const express = require('express');

const app = express();
const db = require('./db');

const costumerController = require("./controllers/costumerController");
app.use('/costumers',costumerController);

const movieController = require("./controllers/movieController");
app.use('/movies', movieController);

const rentController = require("./controllers/rentController");
app.use('/rents', rentController);

module.exports = app;