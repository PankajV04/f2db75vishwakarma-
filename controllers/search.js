var Search = require('../models/search'); 
 
// List of all searchs 
exports.search_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: Search list'); 
}; 
 
// for a specific Search. 
exports.search_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Search detail: ' + req.params.id); 
}; 
 
// Handle Search create on POST. 
exports.search_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: Search create POST'); 
}; 
 
// Handle Search delete form on DELETE. 
exports.search_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Search delete DELETE ' + req.params.id); 
}; 
 
// Handle Search update form on PUT. 
exports.search_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Search update PUT' + req.params.id); 
}; 
// List of all Costumes 
exports.search_list = async function(req, res) { 
    try{ 
        theSearchs = await Search.find(); 
        res.send(theSearchs); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// VIEWS 
// Handle a show all view 
exports.search_view_all_Page = async function(req, res) { 
    try{ 
        theSearchs = await Search.find(); 
        res.render('search', { title: 'Search Search Results', results: theSearchs }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle Costume create on POST. 
exports.search_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Search(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.search_type = req.body.search_type; 
    document.cost = req.body.cost; 
    document.size = req.body.size; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 