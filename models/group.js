'use strict';
module.exports = (sequelize, DataTypes) => {
  const Group = sequelize.define('group',  {
    name: DataTypes.STRING,
    created_by: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    updated_by: DataTypes.INTEGER,
    updated_at: DataTypes.DATE,
    is_active: DataTypes.TINYINT,
  }, {});
  Group.associate = function(models) {
    // associations can be defined here
  };
  return Group;
};
