const User = require('./user');
const Post = require('./post');

// A user can have many posts
User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

// Post belongs to the user
Post.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = { User, Post };