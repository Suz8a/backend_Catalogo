const mongoose = require('mongoose');

const costumerSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: Number
});

mongoose.model('costumer',costumerSchema);

module.exports = mongoose.model('costumer');