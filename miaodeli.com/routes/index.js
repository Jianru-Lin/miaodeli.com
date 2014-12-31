var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: '喵德利/Miaodeli' });
});

module.exports = router;
