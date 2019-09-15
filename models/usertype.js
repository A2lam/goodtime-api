'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserType = sequelize.define('user_type',  {
    name: DataTypes.STRING
  }, {
    timestamps: false
  });
  UserType.associate = function(models) {
    // associations can be defined here
  };
  return UserType;
};
