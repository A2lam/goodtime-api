'use strict';
module.exports = (sequelize, DataTypes) => {
  const MenuItem = sequelize.define('menu_item', {
    price: DataTypes.FLOAT,
    created_by: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    updated_by: DataTypes.INTEGER,
    updated_at: DataTypes.DATE,
    is_active: DataTypes.TINYINT,
  }, {
    timestamps: false
  });
  MenuItem.associate = function(models) {
    MenuItem.belongsTo(models.menu, {
      foreignKey: 'menus_id',
    });
    MenuItem.belongsTo(models.item, {
      foreignKey: 'items_id',
    });
  };
  return MenuItem;
};
