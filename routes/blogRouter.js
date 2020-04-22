var express = require('express');
var router = express.Router();
const Post = require('../sequelize.js');

router.get('/', (req,res,next) => {
	// Get all instances and pass to pug
	// Static until model + db integration
	Post.findAll().then(posts => {
		res.render('blog', { posts: posts });
	});
});

router.get('/new', (req,res,next) => {
	res.render('blog-new')
});

router.get('/:id', (req,res,next) => {
	Post.findByPk(req.params.id)
		.then(post => {
			res.render('blog-show', { post: post });
		});
});

router.get('/:id/edit', (req,res,next) => {
	Post.findByPk(req.params.id)
		.then(post => {
			res.render('blog-edit', { post: post });
		});
});

router.post('/', (req,res,next) => {
	// Create new instance of blog with passed params and redirect to show
	Post.create({
		postedBy: req.body.postedBy,
		title: req.body.title,
		content: req.body.content
	}).then(post => {
		res.redirect('/blog/' + post.id);
	});
});

router.patch('/:id', async(req,res,next) => {
		Post.update({
			title: req.body.title,
			content: req.body.content
		}, { where: req.params.id }
		).then(post => {
			res.redirect('/blog/' + post.id);
		});
});

router.delete(':id', (req,res,next) => {
	// DELETE instance with matching id and redirect to /blog
	res.redirect('/');
});

module.exports = router;
