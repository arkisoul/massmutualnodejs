var express = require('express');
var router = express.Router();

const todoRouter = require('./todos');
const userRouter = require('./users');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.statusCode = 200;
  res.render('index', { title: 'Express App' });
});

router.get('/welcome', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', (req, res, next) => {
  res.render('about');
})

router.use("/todos", todoRouter);
router.use("/users", userRouter);

module.exports = router;
