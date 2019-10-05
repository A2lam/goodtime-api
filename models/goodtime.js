'use strict';
module.exports = (sequelize, DataTypes) => {
  const GoodTime = sequelize.define('good_time', {
    date: DataTypes.DATE,
    is_booking: DataTypes.TINYINT,
    number_of_participants: DataTypes.INTEGER,
    status: DataTypes.STRING,
    refusal_purpose: DataTypes.STRING,
    created_by: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    updated_by: DataTypes.INTEGER,
    updated_at: DataTypes.DATE,
    is_active: DataTypes.TINYINT,
  }, {
    timestamps: false
  });
  GoodTime.associate = function(models) {
    GoodTime.belongsTo(models.group, {
      foreignKey: 'groups_id',
    });
    GoodTime.belongsTo(models.bar, {
      foreignKey: 'bars_id',
    });
  };
  return GoodTime;
};
