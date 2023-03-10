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
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment',
  }
);




module.exports = Comment;
// userId: {
//   type: DataTypes.UUID,
//   references: {
//       model: 'users',
//       key: 'id',
//   },
