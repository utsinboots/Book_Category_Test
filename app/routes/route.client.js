// const express = require('express');
// const router = express.Router();
const router = require('express').Router();
const clientController = require('../controller/controller.client');

//home route
router.get('/', clientController.login)
router.post('/', clientController.verifyLogin)
//router.get('/home', clientController.home);

module.exports = router;