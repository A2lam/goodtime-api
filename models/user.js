'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
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
    is_active: DataTypes.TINYINT,
  }, {
    timestamps: false
  });
  User.associate = function(models) {
    User.belongsTo(models.user_type, {
      foreignKey: 'user_type_id',
    });
    User.belongsTo(models.address, {
      foreignKey: 'addresses_id',
    });
    User.belongsTo(models.picture, {
      foreignKey: 'pictures_id',
    });
  };
  return User;
};
