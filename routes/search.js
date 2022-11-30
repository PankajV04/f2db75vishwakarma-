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

/* GET searchs */ 
router.get('/', search_controlers.search_view_all_Page ); 
module.exports = router; 

/* GET detail costume page */ 
router.get('/detail', search_controlers.search_view_one_Page); 

/* GET create costume page */ 
router.get('/create', secured, search_controlers.search_create_Page); 

/* GET create update page */ 
router.get('/update',  search_controlers.search_update_Page); 
 
/* GET delete costume page */ 
router.get('/delete', secured, search_controlers.search_delete_Page); 
 
/* GET update costume page */ 
router.get('/update', secured, search_controlers.search_update_Page); 
