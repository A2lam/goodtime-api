'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('users', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    phone: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    token: DataTypes.STRING,
    favorite_item: DataTypes.INTEGER,
    max_price: DataTypes.DECIMAL,
    favorite_transportation: DataTypes.INTEGER,
    created_by: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    updated_by: DataTypes.INTEGER,
    updated_at: DataTypes.DATE,
    isActive: DataTypes.TINYINT,
  }, {});
  User.associate = function(models) {
    User.belongsTo(models.UserType, {
      foreignKey: 'user_type_id',
    });
    User.belongsTo(models.Address, {
      foreignKey: 'addresses_id',
    });
    User.belongsTo(models.Picture, {
      foreignKey: 'pictures_id',
    });
  };
  return User;
};
