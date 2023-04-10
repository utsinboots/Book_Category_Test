const Category = require('../model/model.category');

exports.index = async (req, res) => {
    const categories = await Category.find();
    res.render('category/index', { categories });
}

exports.create = async (req, res) => {
    res.render('category/create');
}

exports.store = async (req, res) => {
    const category = new Category({
        title: req.body.title,
        content: req.body.content
    })
    await category.save();
    res.redirect('/category');
}

exports.delete = async (req, res) => {
    const id = req.params.id;
    await Category.findByIdAndDelete(id);
    res.redirect('/category');
}