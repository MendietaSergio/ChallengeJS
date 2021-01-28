var express = require('express');
const indexController = require('../controllers/controllerIndex.js');
var router = express.Router();

/* GET home page. */
router.get('/', indexController.home);
router.get('/editTable', indexController.editTable);
router.get('/entry', indexController.entry);
router.get('/extraction', indexController.extraction);



module.exports = router;
