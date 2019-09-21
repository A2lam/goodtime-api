'use strict';
module.exports = (sequelize, DataTypes) => {
  const FavoriteBar = sequelize.define('favorite_bar', {
    created_by: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    updated_by: DataTypes.INTEGER,
    updated_at: DataTypes.DATE,
    is_active: DataTypes.TINYINT,
  }, {
    timestamps: false
  });
  FavoriteBar.associate = function(models) {
    FavoriteBar.belongsTo(models.user, {
      foreignKey: 'users_id',
    });
    FavoriteBar.belongsTo(models.bar, {
      foreignKey: 'bars_id',
    });
  };
  return FavoriteBar;
};
