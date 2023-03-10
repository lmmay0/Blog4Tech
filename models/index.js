const User = require("./User")
const Post = require("./Post")
const Comment = require("./Comment")
User.hasMany(Post, {
    foreignKey: "userId",
    onDelete: "CASCADE"
})
Post.belongsTo(User, {
    onDelete: "CASCADE"
})
User.hasMany(Comment, {
    foreignKey: "userId",
    onDelete: "CASCADE"
});
Comment.belongsTo(User, {
    onDelete: "CASCADE"
})
Post.hasMany(Comment, {
    foreignKey: "postId",
    onDelete: "CASCADE"
})
Comment.belongsTo(Post, {
    onDelete: "CASCADE"
})
module.exports = { User, Post, Comment }