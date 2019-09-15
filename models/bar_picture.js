'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bar = sequelize.define('bar_picture', {
    is_main: DataTypes.TINYINT,
    created_by: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    updated_by: DataTypes.INTEGER,
    updated_at: DataTypes.DATE,
    is_active: DataTypes.TINYINT,
  }, {
    timestamps: false
  });
  Bar.associate = function(models) {
    Bar.belongsTo(models.bar, {
      foreignKey: 'bars_id',
    });
    Bar.belongsTo(models.picture, {
      foreignKey: 'pictures_id',
    });
  };
};
