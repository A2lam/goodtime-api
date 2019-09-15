'use strict';
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('item', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    is_food: DataTypes.TINYINT,
    contains_alcohol: DataTypes.TINYINT,
    contains_allergen: DataTypes.TINYINT,
    created_by: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    updated_by: DataTypes.INTEGER,
    updated_at: DataTypes.DATE,
    is_active: DataTypes.TINYINT,
  }, {
    timestamps: false
  });
  Item.associate = function(models) {};
  return Item;
};
