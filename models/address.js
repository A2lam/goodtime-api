'use strict';
module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define('addresses',  {
    number: DataTypes.INTEGER,
    street: DataTypes.STRING,
    complement: DataTypes.STRING,
    post_code: DataTypes.INTEGER,
    city: DataTypes.STRING,
    latitude: DataTypes.DECIMAL,
    longitude: DataTypes.DECIMAL
  }, {});
  Address.associate = function(models) {
    // associations can be defined here
  };
  return Address;
};
