var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('test', { title: 'Hey', message: 'd안녕b' });
});

module.exports = router;
