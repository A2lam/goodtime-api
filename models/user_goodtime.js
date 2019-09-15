'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserGoodTime = sequelize.define('good_time', {
    status: DataTypes.STRING,
    is_sam: DataTypes.TINYINT,
    created_by: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    updated_by: DataTypes.INTEGER,
    updated_at: DataTypes.DATE,
    is_active: DataTypes.TINYINT,
  }, {
    timestamps: false
  });
  UserGoodTime.associate = function(models) {
    UserGoodTime.belongsTo(models.user, {
      foreignKey: 'users_id',
    });
    UserGoodTime.belongsTo(models.good_time, {
      foreignKey: 'good_times_id',
    });
  };
  return UserGoodTime;
};
