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
exports.aeroplane_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await Aeroplane.findById(req.params.id) 
        console.log(result)
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
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
exports.aeroplane_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`) 
    let toUpdate = await Aeroplane.findById( req.params.id) 
    try { 
        // Do updates of properties 
        if(req.body.flight_capacity)  
            toUpdate.flight_capacity = req.body.flight_capacity; 
        if(req.body.flight_number) 
            toUpdate.flight_number = req.body.flight_number; 
        if(req.body.flight_captain) 
            toUpdate.flight_captain = req.body.flight_captain; 
        if(req.body.is_operational) 
            toUpdate.is_operational = true; 
        else
            toUpdate.is_operational = false;
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`); 
    } 
}; 