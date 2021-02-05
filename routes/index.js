var express = require('express');


const indexController = require('../controllers/controllerIndex.js');
const loginValidator = require('../validations/loginValidator');
const registerValidator = require('../validations/registerValidator');


var router = express.Router();

/* LOGIN*/
router.get('/', indexController.homeLogin);
router.post('/',loginValidator,indexController.processLogin);

/* REGISTER */
router.get('/register',indexController.homeRegister)
router.post('/register',registerValidator,indexController.processRegister)


router.get('/homeuser', indexController.homeUser);
router.get('/editTable', indexController.editTable);
router.get('/entry', indexController.entry);
router.get('/extraction', indexController.extraction);



module.exports = router;
