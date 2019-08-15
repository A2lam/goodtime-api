'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserGroup = sequelize.define('user_group',  {
    status: DataTypes.STRING,
    created_by: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    updated_by: DataTypes.INTEGER,
    updated_at: DataTypes.DATE,
    isActive: DataTypes.TINYINT,
  }, {});
  UserGroup.associate = function(models) {
    UserGroup.belongsTo(models.User, {
      foreignKey: 'user_id',
    });
    UserGroup.belongsTo(models.Group, {
      foreignKey: 'groups_id',
    });
  };
  return UserGroup;
};
