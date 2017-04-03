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

router.get('/custom-sandbox', function (req, res) {
  // get the answer from the query string (eg. ?over18=false)
  var edit = req.query.edit
console.log(edit);
  if (edit === 'task') {
    // redirect to the relevant page
    res.redirect('/task-choice')
  } else {
    // if over18 is any other value (or is missing) render the page requested
    res.render('custom-sandbox')
  }
})

router.get('/delete-sandbox-confirm', function (req, res) {
  // get the answer from the query string (eg. ?over18=false)
  var del = req.query.del
console.log(del);
  if (del === 'vmandrepo') {
    // redirect to the relevant page
    res.redirect('/delete-sandbox-repo-confirm')
  } else {
    // if over18 is any other value (or is missing) render the page requested
    res.render('delete-sandbox-confirm')
  }
})

router.get('/upload-csv', function (req, res) {
  // get the answer from the query string (eg. ?over18=false)
  var upload = req.query.upload
console.log(upload);
  if (upload === 'db') {
    // redirect to the relevant page
    res.redirect('/write-to-database')
 } if { (upload === 'open') {
    // redirect to the relevant page
    res.redirect('/open-data')
}  if { (upload === 'synthetic') {
    // redirect to the relevant page
    res.redirect('/create-synthetic-data')
  } else {
    // if over18 is any other value (or is missing) render the page requested
    res.render('upload-csv')
  }
})

module.exports = router;
