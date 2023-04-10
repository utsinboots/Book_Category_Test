const mongoose = require('mongoose');

//category schema
const categorySchema = new mongoose.Schema({
    title: String,
    content: String
});

//category model
module.exports = mongoose.model('Category', categorySchema); 

