const mongoose = require('mongoose');

const costumerSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: Number
});