// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('Search', { title: 'Search Results' });
// });

// module.exports = router;

var express = require('express'); 
const search_controlers= require('../controllers/search'); 
var router = express.Router(); 
 
/* GET searchs */ 
router.get('/', search_controlers.search_view_all_Page ); 
module.exports = router; 