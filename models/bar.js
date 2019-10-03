'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bar = sequelize.define('bar', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    phone: DataTypes.STRING,
    type: DataTypes.STRING,
    created_by: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    updated_by: DataTypes.INTEGER,
    updated_at: DataTypes.DATE,
    is_active: DataTypes.TINYINT,
  }, {
    timestamps: false
  });
  Bar.associate = function(models) {
    Bar.belongsTo(models.address, {
      foreignKey: 'addresses_id',
    });
    Bar.belongsTo(models.user, {
      foreignKey: 'users_id',
    });
  };
  return Bar;
};
