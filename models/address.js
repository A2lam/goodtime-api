'use strict';
module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define('address',  {
    number: DataTypes.INTEGER,
    street: DataTypes.STRING,
    complement: DataTypes.STRING,
    post_code: DataTypes.INTEGER,
    city: DataTypes.STRING,
    latitude: DataTypes.DECIMAL,
    longitude: DataTypes.DECIMAL
  }, {
    timestamps: false
  });
  Address.associate = function(models) {
    // associations can be defined here
  };
  return Address;
};
