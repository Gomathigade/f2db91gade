var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var aeroplane_controller = require('../controllers/Aeroplane'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// AEROPLANE ROUTES /// 
 
// POST request for creating a aeroplane.  
router.post('/aeroplane', aeroplane_controller.aeroplane_create_post); 
 
// DELETE request to delete aeroplane. 
router.delete('/aeroplane/:id', aeroplane_controller.aeroplane_delete); 
 
// PUT request to update aeroplane. 
router.put('/aeroplane/:id', aeroplane_controller.aeroplane_update_put); 
 
// GET request for one aeroplane. 
router.get('/aeroplane/:id', aeroplane_controller.aeroplane_detail); 
 
// GET request for list of all aeroplane items. 
router.get('/aeroplane', aeroplane_controller.aeroplane_list); 
 
module.exports = router; 
 