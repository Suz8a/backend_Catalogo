const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./db');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const costumerController = require("./controllers/costumerController");
app.use('/costumers',costumerController);

const movieController = require("./controllers/movieController");
app.use('/movies', movieController);

const rentController = require("./controllers/rentController");
app.use('/rents', rentController);

module.exports = app;