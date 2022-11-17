var express = require('express');
const aeroplane_controlers= require('../controllers/Aeroplane'); 
var router = express.Router();

/* GET home page. */
router.get('/', aeroplane_controlers.aeroplane_view_all_Page ); 

/* CREATE a new aeroplane obj. */
router.get('/create', aeroplane_controlers.aeroplane_create_Page);

// PUT/UPDATE request to update aeroplane.  
router.get('/update', aeroplane_controlers.aeroplane_update_Page); 

// GET request for one aeroplane. 
router.get('/detail', aeroplane_controlers.aeroplane_view_one_Page); 

// DELETE request for one aeroplane. 
router.get('/delete', aeroplane_controlers.aeroplane_delete_Page); 

// router.get('/', function(req, res, next) {
//   res.render('aeroplanes', { title: 'Search Results' });
// });

module.exports = router;