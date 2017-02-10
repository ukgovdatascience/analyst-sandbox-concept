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
  var over18 = req.query.over18
console.log(over18);
  if (over18 === 'false') {
    // redirect to the relevant page
    res.redirect('/adv-branch')
  } else {
    // if over18 is any other value (or is missing) render the page requested
    res.render('existing-sandboxes')
  }
})

module.exports = router;
