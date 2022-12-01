var express = require('express');
const aeroplane_controlers= require('../controllers/Aeroplane'); 
var router = express.Router();

// A little function to check if we have an authorized user and continue on 
// or 
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 

/* GET home page. */
router.get('/', aeroplane_controlers.aeroplane_view_all_Page ); 

/* CREATE a new aeroplane obj. */
router.get('/create', secured, aeroplane_controlers.aeroplane_create_Page);

// PUT/UPDATE request to update aeroplane.  
router.get('/update', secured, aeroplane_controlers.aeroplane_update_Page); 

// GET request for one aeroplane. 
router.get('/detail', aeroplane_controlers.aeroplane_view_one_Page); 

// DELETE request for one aeroplane. 
router.get('/delete', secured, aeroplane_controlers.aeroplane_delete_Page); 

// router.get('/', function(req, res, next) {
//   res.render('aeroplanes', { title: 'Search Results' });
// });

module.exports = router;