var Search = require('../models/search'); 
 
// List of all Search 
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
 
// for a specific search. 
exports.search_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: search detail: ' + req.params.id); 
}; 
 
// Handle search create on POST. 
exports.search_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: search create POST'); 
}; 
 
// Handle search delete form on DELETE. 
exports.search_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: search delete DELETE ' + req.params.id); 
}; 
 
// Handle search update form on PUT. 
exports.search_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: search update PUT' + req.params.id); 
}; 