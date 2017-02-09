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

router.get('/build-sandbox', function (req, res) {

  // get the answer from the query string (eg. ?over18=false)
  var advuser = req.query.advuser;

  if (advuser == "false"){

    // redirect to the relevant page
    res.redirect("/build-sandbox");

  } else {

    // if over18 is any other value (or is missing) render the page requested
    res.render('choose-tools');

  }

});

// add your routes here

// Branching

router.get('/existing-sandboxes', function (req, res) {

  // get the answer from the query string (eg. ?over18=false)
  var advuser = req.query.advuser;

  if (advuser == "false"){

    // redirect to the relevant page
    res.redirect("/existing-sandboxes");

  } else {

    // if over18 is any other value (or is missing) render the page requested
    res.render('adv-branch');

  }

});

module.exports = router;
