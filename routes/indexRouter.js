var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', (req,res,next) => {
	// I will need to be passed session params once integrated!
	res.render('login')
});

router.get('/projects', (req,res,next) => {
	// This can be static for now, but should ultimately have a project model!
	res.render('projects')
});

router.get('/about', (req,res,next) => {
	res.render('about')
});

module.exports = router;
