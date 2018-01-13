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
    console.log(hbsObject);
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

router.put('/burgers/update/devour/:id', function(req, res) {
  burgers.update('burgers','devoured', req.params.id, function() {
      res.redirect('/burgers');
  })
})


module.exports = router;
