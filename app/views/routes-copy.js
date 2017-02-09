var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  
  res.render('index');

});


// Example routes - feel free to delete these

// Passing data into a page

router.get('/examples/template-data', function (req, res) {

  res.render('examples/template-data', { 'name' : 'Foo' });

});

// Branching

router.get('/adv-branch', function (req, res) {

  // get the answer from the query string (eg. ?over18=false)
  var adv-user = req.query.adv-user;

  if (adv-user == "false"){

    // redirect to the relevant page
    res.redirect("/choose-tools");

  } else {

    // if over18 is any other value (or is missing) render the page requested
    res.render('/beginner');

  }

});

// add your routes here

// Branching

router.get('/Welcome', function (req, res) {

  // get the answer from the query string (eg. ?over18=false)
  var existing = req.query.advuser;

  if (existing == "false"){

    // redirect to the relevant page
    res.redirect("/adv-branch");

  } else {

    // if over18 is any other value (or is missing) render the page requested
    res.render('/existing-sandboxes');

  }

});



module.exports = router;
