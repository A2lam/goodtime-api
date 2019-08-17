'use strict';
module.exports = (sequelize, DataTypes) => {
  const Picture = sequelize.define('pictures',  {
    name: DataTypes.STRING,
    path: DataTypes.STRING,
    created_by: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    updated_by: DataTypes.INTEGER,
    updated_at: DataTypes.DATE,
    isActive: DataTypes.TINYINT,
  }, {});
  Picture.associate = function(models) {
    // associations can be defined here
  };
  return Picture;
};
