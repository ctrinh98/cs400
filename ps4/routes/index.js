var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/ps4d', function(req,res){
  console.log(req.body);
  // console.log('please redirect');
  var string = encodeURIComponent(req.body.pokemon_name);
  console.log(req.body.pokemon_name);
  console.log(string);
  return res.redirect('/ps4?name=' + string);
})

module.exports = router;
