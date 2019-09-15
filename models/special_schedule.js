'use strict';
module.exports = (sequelize, DataTypes) => {
  const SpecialSchedule = sequelize.define('special_schedule', {
    begin_at: DataTypes.DATE,
    end_at: DataTypes.DATE,
    new_opening_hours: DataTypes.TIME,
    new_closing_hours: DataTypes.TIME,
    is_just_closed: DataTypes.TINYINT,
    created_by: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    updated_by: DataTypes.INTEGER,
    updated_at: DataTypes.DATE,
    is_active: DataTypes.TINYINT,
  }, {
    timestamps: false
  });
  SpecialSchedule.associate = function(models) {
    SpecialSchedule.belongsTo(models.bar, {
      foreignKey: 'bars_id',
    });
  };
  return SpecialSchedule;
};
