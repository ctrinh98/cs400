var express = require('express');
var router = express.Router();

/* GET fixed string. */
router.get('/', function(req, res, next) {
  res.render('ps3', { string: 'Hey now' });
});

router.post('/', function (req, res, next) {
  res.render('ps3', {string: req.body.input, length: req.body.input.length});
});

module.exports = router;
