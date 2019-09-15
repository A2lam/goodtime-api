'use strict';
module.exports = (sequelize, DataTypes) => {
  const Schedule = sequelize.define('schedule', {
    weekday: DataTypes.STRING,
    open: DataTypes.TINYINT,
    is_hh: DataTypes.TINYINT,
    hour: DataTypes.TIME,
    notes: DataTypes.TEXT,
    created_by: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    updated_by: DataTypes.INTEGER,
    updated_at: DataTypes.DATE,
    is_active: DataTypes.TINYINT,
  }, {
    timestamps: false
  });
  Schedule.associate = function(models) {
    Schedule.belongsTo(models.bar, {
      foreignKey: 'bars_id',
    });
  };
  return Schedule;
};
