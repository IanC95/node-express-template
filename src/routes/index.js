var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', main_content: 'Lots of text and stuff' });
});

module.exports = router;
