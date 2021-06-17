let express = require('express');
let router = express.Router();

let product_controller = require('../controllers/api/v1.0/ProductController');

router.post('/create', product_controller.create_product);
router.get('/all', product_controller.all_products);
router.post('/update/id/:id', product_controller.update_product);
router.get('/view/id/:id', product_controller.view_product);
router.post('/delete', product_controller.delete_product);

module.exports = router;