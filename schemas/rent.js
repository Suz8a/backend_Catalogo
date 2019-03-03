const mongoose = require('mongoose');

const rentSchema = new mongoose.Schema({
    rentDay: String,
    rentMonth: String,
    rentYear: String,
    costumerId: String,
    movieId: String
});

mongoose.model('rent',costumerSchema);

module.exports = mongoose.model('rent');