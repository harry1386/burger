var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var router = express.Router();
var burgers = require('../models/burger.js')


router.get("/", function(req, res) {
  burgers.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  });
});

router.post("/burgers", function(req, res) {
  burgers.create([
    "burger_name"
  ], [
    req.body.burger_name
  ], function(result) {
    
    res.redirect('/');
  });
});

//so I have continued working on this, and tried to make a Jquery function but that would require an entire rebuild.
//what I am frustrated/ curious about is how this code works on others machines, but for some reason not mine. 
//I am at a loss, but I am pushing to heroku and turning it in.  If you have time later we can talk about it.

router.put('/burgers/update/devour/:id', function(req, res) {
  console.log("I'm hit");
  burgers.update('burgers','devoured', req.params.id, function() {
      res.redirect('/');
  })
})



module.exports = router;
