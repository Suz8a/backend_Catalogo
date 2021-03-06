const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: String,
    genre: String,
    director: String,
    launchYear: String
});

mongoose.model('movie',movieSchema);

module.exports = mongoose.model('movie');