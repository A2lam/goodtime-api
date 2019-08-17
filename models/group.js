'use strict';
module.exports = (sequelize, DataTypes) => {
  const Group = sequelize.define('groups',  {
    name: DataTypes.STRING,
    created_by: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    updated_by: DataTypes.INTEGER,
    updated_at: DataTypes.DATE,
    isActive: DataTypes.TINYINT,
  }, {});
  Group.associate = function(models) {
    // associations can be defined here
  };
  return Group;
};
