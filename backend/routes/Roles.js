let express = require('express');
let router = express.Router();

let roles_controller = require('../controllers/api/v1.0/RolesController');

router.post('/create', roles_controller.create_rol);
router.get('/all', roles_controller.all_rol);
router.post('/update/id/:id', roles_controller.update_rol);
router.get('/view/id/:id', roles_controller.view_rol);
router.post('/delete', roles_controller.delete_rol);

module.exports = router;