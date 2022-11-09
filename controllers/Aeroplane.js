var Aeroplane = require('../models/Aeroplane'); 
 
// List of all Aeroplane
exports.aeroplane_list = async function(req, res) { 
    try{ 
        theAeroplane = await Aeroplane.find(); 
        res.send(theAeroplane); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
    
}; 

// for a specific Aeroplane. 
exports.aeroplane_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Aeroplane detail: ' + req.params.id); 
}; 
 
// Handle Aeroplane create on POST. 
exports.aeroplane_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: Aeroplane create POST'); 
}; 
 
// Handle Aeroplane delete form on DELETE. 
exports.aeroplane_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Aeroplane delete DELETE ' + req.params.id); 
}; 
 
// Handle Aeroplane update form on PUT. 
exports.aeroplane_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Aeroplane update PUT' + req.params.id); 
}; 