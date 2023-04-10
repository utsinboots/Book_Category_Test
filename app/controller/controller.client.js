const Book = require('../model/model.book');
const Category = require('../model/model.category');

exports.login = (req, res) => {
    res.render('login');
}

exports.home = async (req, res) => {
    const books = await Book.find();
    const categories = await Category.find();
    res.render('home', { books, categories });
}

exports.verifyLogin = async (req, res) => {
    // auth logic
    const {name, email, password} = req.body;
    if(name == 'test' && email == 'test@test.com' && password == 'password') {       
        console.log(`LOGIN DETAILS: Name: ${name}, Email: ${email}, PW: ${password}`)
        console.log("SUCCESFUL LOGIN")
        // req.session('user', user);
        res.redirect('/home');
    } else{
        console.log("Wrong CREDENTIALS, Enter again!")
        res.redirect('/');
    }
}



