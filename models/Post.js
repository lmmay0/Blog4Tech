const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
  {
    
    title: DataTypes.STRING,
    blog:  DataTypes.STRING,
    },
    
  
  {
    sequelize,
  
  }
);

module.exports = Post;
