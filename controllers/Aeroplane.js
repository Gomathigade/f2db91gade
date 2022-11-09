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

// VIEWS 
// Handle a show all view 
exports.aeroplane_view_all_Page = async function(req, res) { 
    try{ 
        theAeroplanes = await Aeroplane.find(); 
        res.render('Aeroplane', { title: 'Aeroplane Search Results', resultList: theAeroplanes }); 
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
exports.aeroplane_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Aeroplane(); 
    document.flight_capacity = req.body.flight_capacity; 
    document.flight_number = req.body.flight_number; 
    document.flight_captain = req.body.flight_captain; 
    document.is_operational = req.body.is_operational; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle Aeroplane delete form on DELETE. 
exports.aeroplane_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Aeroplane delete DELETE ' + req.params.id); 
}; 
 
// Handle Aeroplane update form on PUT. 
exports.aeroplane_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Aeroplane update PUT' + req.params.id); 
}; 