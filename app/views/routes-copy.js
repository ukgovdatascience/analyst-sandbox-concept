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

router.get('/views/adv-user', function (req, res) {

  // get the answer from the query string (eg. ?over18=false)
  var advuser = req.query.advuser;

  if (advuser == "false"){

    // redirect to the relevant page
    res.redirect("/views/adv-user");

  } else {

    // if over18 is any other value (or is missing) render the page requested
    res.render('views/beginner');

  }

});

// add your routes here

module.exports = router;
