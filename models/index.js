const User = require('./User');
const Comment = require('./comment')
const Post = require('./Post')



/* User.hasMany(Post, {
    foreignKey: 'user_id'
});
*/
/* User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
}); */

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});
/*
Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
}); */

Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id'
});



module.exports = { User, Comment, Post };