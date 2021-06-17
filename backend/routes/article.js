let express = require('express');
let router = express.Router();
let articleController = require('../controllers/api/v1.0/ArticleController');
let middlewares = require('./middlewares');

router.post('/create', articleController.Create);

router.post('/detail/:id', articleController.ArticleDetail);

router.post('/show', articleController.ShowAllArticles);

router.post('/update/:id', articleController.ArticleUpdate);

router.post('/delete/:id', articleController.ArticleDelete);

module.exports = router;