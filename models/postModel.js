module.exports = (sequelize, type) => {
	return sequelize.define('post', {
		id: {
			type: type.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		postedBy: {
			type : type.STRING,
			notNull: true
		},
		title: {
			type : type.STRING,
			notNull: true
		},
		content: {
			type : type.STRING,
			notNull: true
		}
	})
};
