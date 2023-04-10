const Book = require('../model/model.book');

exports.index = async (req, res) => {
    const books = await Book.find();
    res.render('book/index', { books })
}

exports.create = async (req, res) => {
    res.render('book/create');
}

exports.store = async (req, res) => {
    const book = new Book({
        title: req.body.title,
        content: req.body.content
    });
    await book.save();
    res.redirect('/book');
}

exports.delete = async (req, res) => {
    const id = req.params.id;
    await Book.findByIdAndDelete(id);
    res.redirect('/book');
}