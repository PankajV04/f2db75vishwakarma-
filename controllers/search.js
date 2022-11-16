var Search = require('../models/search');

// List of all searchs 
exports.search_list = function (req, res) {
    res.send('NOT IMPLEMENTED: Search list');
};

// for a specific Search. 
exports.search_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await Search.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

// Handle Search create on POST. 
exports.search_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: Search create POST');
};

// Handle Search delete form on DELETE. 
exports.search_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Search delete DELETE ' + req.params.id);
};

// Handle Search update form on PUT. 
exports.search_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: Search update PUT' + req.params.id);
};
// List of all Costumes 
exports.search_list = async function (req, res) {
    try {
        theSearchs = await Search.find();
        res.send(theSearchs);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// VIEWS 
// Handle a show all view 
exports.search_view_all_Page = async function (req, res) {
    try {
        theSearchs = await Search.find();
        res.render('search', { title: 'Search Search Results', results: theSearchs });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle Costume create on POST. 
exports.search_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Search();
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.color = req.body.color;
    document.size = req.body.size;
    document.price = req.body.price;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle Costume update form on PUT. 
exports.search_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Search.findById(req.params.id)
        // Do updates of properties 
        if (req.body.color) toUpdate.color = req.body.color;
        if (req.body.size) toUpdate.size = req.body.size;
        if (req.body.price) toUpdate.price = req.body.price;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`);
    }
};

// Handle Costume delete on DELETE. 
exports.search_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await Search.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};

// Handle a show one view with id specified by query 
exports.search_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await Search.findById(req.query.id)
        res.render('searchdetail', { title: 'Search Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
}; 

// Handle building the view for creating a costume. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.search_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('searchcreate', { title: 'Search Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for updating a costume. 
// query provides the id 
exports.search_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await Search.findById(req.query.id) 
        res.render('searchupdate', { title: 'Search Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
 
