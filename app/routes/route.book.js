const router = require('express').Router();
const bookController = require('../controller/controller.book');

router.route('/')
        .get(bookController.index)
        .post(bookController.store);
router.get('/create', bookController.create);
router.get('/delete/:id', bookController.delete)

module.exports = router;