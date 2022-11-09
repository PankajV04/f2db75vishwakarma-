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
 