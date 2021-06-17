let express = require('express');
let router = express.Router();
let categoryController = require('../controllers/api/v1.0/CategoryController');
let middlewares = require('./middlewares');

router.post('/create', categoryController.Create);

router.post('/detail/:id', categoryController.Detail);

router.post('/show', categoryController.Show);

router.post('/update/:id', categoryController.Update);

router.post('/delete/:id', categoryController.Delete);


module.exports = router;