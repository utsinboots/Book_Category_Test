const Book = require('../model/model.book');
const Category = require('../model/model.category');

exports.login = (req, res) => {
    res.render('login');
}

exports.verifyLogin = async (req, res, next) => { //don't forget to remove next if use redirect below
    // auth logic
    const {name, email, password} = req.body;
    if(name == 'test' && email == 'test@test.com' && password == 'password') {       
        console.log(`LOGIN DETAILS: Name: ${name}, Email: ${email}, PW: ${password}`)
        console.log("SUCCESSFUL LOGIN")
        // req.session('user', user); //ignore for now as I'm using condition to check

        //res.redirect('/home');
        next(); //not sure if I should use next() or redirect to /home
    } else{
        console.log("Wrong CREDENTIALS, Enter again!")
        res.redirect('/');
    }
}

exports.home = async (req, res) => {
    const books = await Book.find();
    const categories = await Category.find();
    res.render('home', { books, categories });
}

