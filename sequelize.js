const Sequelize = require('sequelize');
const PostModel = require('./models/postModel.js');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'db/blog.sqlite'
});
    // Test the connection
    sequelize
        .authenticate()
        .then(() => {
            console.log('Connection to blog database established via Sequelize');
        })
        .catch(err => {
            console.log('Unable to connect to blog database', err);
        });

const Post = PostModel(sequelize,Sequelize);

sequelize.sync()
	.then(() => { console.log('table created') });

module.exports = Post;
