const mongoose = require('mongoose');

function connectDB(){
    mongoose.connect('mongodb://localhost:27017/bookStore'); // /bookStore will create db with name bookStore
    console.log('Database Connected')
}

connectDB();