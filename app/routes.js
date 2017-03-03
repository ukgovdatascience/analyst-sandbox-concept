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

router.get('/existing-sandboxes', function (req, res) {
  // get the answer from the query string (eg. ?over18=false)
  var user = req.query.user
console.log(user);
  if (user === 'new') {
    // redirect to the relevant page
    res.redirect('/user-agreement')
  } else {
    // if over18 is any other value (or is missing) render the page requested
    res.render('existing-sandboxes')
  }
})

router.get('/choose-tools', function (req, res) {
  // get the answer from the query string (eg. ?over18=false)
  var adv = req.query.adv
console.log(adv);
  if (adv === 'false') {
    // redirect to the relevant page
    res.redirect('/build-sandbox')
  } else {
    // if over18 is any other value (or is missing) render the page requested
    res.render('choose-tools')
  }
})

module.exports = router;
