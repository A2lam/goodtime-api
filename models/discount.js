'use strict';
module.exports = (sequelize, DataTypes) => {
  const Discount = sequelize.define('discount', {
    amount: DataTypes.FLOAT,
    begin_at: DataTypes.DATE,
    end_at: DataTypes.DATE,
    created_by: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    updated_by: DataTypes.INTEGER,
    updated_at: DataTypes.DATE,
    is_active: DataTypes.TINYINT,
  }, {
    timestamps: false
  });
  Discount.associate = function(models) {
    Discount.belongsTo(models.menu_item, {
      foreignKey: 'menu_items_id',
    });
  };
  return Discount;
};
