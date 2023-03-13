const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
  {

    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    blog: {
      type: DataTypes.STRING,
    },
    
  },
  {
    sequelize,
   
  }
);




module.exports = Comment;
