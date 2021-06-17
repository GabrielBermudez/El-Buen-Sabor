let express = require('express');
let router = express.Router();

let price_controller = require('../controllers/api/v1.0/PriceController');

router.post('/create', price_controller.create_price);
router.get('/all', price_controller.all_prices);
router.post('/update/id/:id', price_controller.update_price);
router.get('/view/id/:id', price_controller.view_price);
router.post('/delete', price_controller.delete_price);

module.exports = router;