'use strict';
module.exports = (sequelize, DataTypes) => {
  const Menu = sequelize.define('menu', {
    menu_section: DataTypes.STRING,
    created_by: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    updated_by: DataTypes.INTEGER,
    updated_at: DataTypes.DATE,
    is_active: DataTypes.TINYINT,
  }, {
    timestamps: false
  });
  Menu.associate = function(models) {
    Menu.belongsTo(models.bar, {
      foreignKey: 'bars_id',
    });
  };
  return Menu;
};
