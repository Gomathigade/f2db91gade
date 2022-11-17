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
exports.aeroplane_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await Aeroplane.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    }
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

// Handle a show one view with id specified by query 
exports.aeroplane_view_one_Page = async function(req, res) {
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await Aeroplane.findById(req.query.id) 
        console.log(result)
        res.render('aeroplanedetail',  { title: 'Aeroplane Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
};

// Handle building the view for creating a aeroplane. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.aeroplane_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('aeroplanecreate', { title: 'Aeroplane Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for updating a aeroplane. 
// query provides the id 
exports.aeroplane_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await Aeroplane.findById(req.query.id)
        res.render('aeroplaneupdate', { title: 'Aeroplane Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle a delete one view with id from query 
exports.aeroplane_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await Aeroplane.findById(req.query.id) 
        res.render('aeroplanedelete', { title: 'Aeroplane Delete', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
};