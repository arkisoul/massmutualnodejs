var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.statusCode = 200;
  res.render('index', { title: 'Express App' });
});

router.get('/welcome', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
