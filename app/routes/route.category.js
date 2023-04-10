const router = require('express').Router();
const categoryController = require('../controller/controller.category');

router.get('/category', categoryController.index);


router.route('/')
        .get(categoryController.index)
        .post(categoryController.store);
router.get('/create', categoryController.create);
router.get('/delete/:id', categoryController.delete);

module.exports = router;