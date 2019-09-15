'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('rating', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    date: DataTypes.DATE,
    created_by: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    updated_by: DataTypes.INTEGER,
    updated_at: DataTypes.DATE,
    is_active: DataTypes.TINYINT,
  }, {
    timestamps: false
  });
  Event.associate = function(models) {
    Event.belongsTo(models.bar, {
      foreignKey: 'bars_id',
    });
  };
  return Event;
};
