var express = require('express');
const aeroplane_controlers= require('../controllers/Aeroplane'); 
var router = express.Router();

/* GET home page. */
router.get('/', aeroplane_controlers.aeroplane_view_all_Page ); 

/* GET request for one aeroplane. */
router.get('/:id', aeroplane_controlers.aeroplane_detail ); 

/* PUT request to update aeroplane. */
router.put('/:id', aeroplane_controlers.aeroplane_update_put ); 

module.exports = router;