'use strict';
module.exports = (sequelize, DataTypes) => {
  const BarPicture = sequelize.define('bar_picture', {
    is_main: DataTypes.TINYINT,
    created_by: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    updated_by: DataTypes.INTEGER,
    updated_at: DataTypes.DATE,
    is_active: DataTypes.TINYINT,
  }, {
    timestamps: false
  });
  BarPicture.associate = function(models) {
    BarPicture.belongsTo(models.bar, {
      foreignKey: 'bars_id',
    });
    BarPicture.belongsTo(models.picture, {
      foreignKey: 'pictures_id',
    });
  };
  return BarPicture;
};
