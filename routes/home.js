var express = require('express');
var router = express.Router();
var clicked = [0,0,0,0]

/* GET users listing. */
router.get('/', function(req, res) {
    res.render('home', {title: 'Hey', message: 'd안녕b', my_list: my, clicked: clicked[0]});
    ++clicked[0];
    console.log(clicked[0]);
});

router.get('/2015', function(req, res) {
    res.render('home_2015', {});
});

router.get('/2016', function(req, res) {
    res.render('home_2016', {});
});

var my = ['최은비', 'eunbi choi', '崔殷庇'];

module.exports = router;
