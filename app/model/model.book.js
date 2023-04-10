const mongoose = require('mongoose');

//book schema
const bookSchema = new mongoose.Schema({
    title: String,
    content: String
});

//book model
module.exports = mongoose.model('Book', bookSchema);