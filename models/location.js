'use strict';
module.exports = function(sequelize, DataTypes) {
  var Location = sequelize.define('Location', {
    distance: DataTypes.INT,
    city: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Location;
};