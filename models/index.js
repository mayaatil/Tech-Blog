const User = require('./User');
const Post = require('./Post');
const Response = require('./Response');

User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Post, Response };
