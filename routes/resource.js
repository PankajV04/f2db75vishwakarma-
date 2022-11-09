var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var search_controller = require('../controllers/search'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// search ROUTES /// 
 
// POST request for creating a search.  
router.post('/searchs', search_controller.search_create_post); 
 
// DELETE request to delete search. 
router.delete('/searchs/:id', search_controller.search_delete); 
 
// PUT request to update search. 
router.put('/searchs/:id', search_controller.search_update_put); 
 
// GET request for one search. 
router.get('/searchs/:id', search_controller.search_detail); 
 
// GET request for list of all search items. 
router.get('/searchs', search_controller.search_list); 
 
module.exports = router;