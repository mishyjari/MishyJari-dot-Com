let {sequelize, Sequelize} = require('../app');

sequelize
	.authenticate()
	.then(() => {
		console.log('Connection to blog database established via Sequelize');
	})
	.catch(err => {
		console.log('Unable to connect to blog database', err);
	});
