'use strict';
module.exports = function(sequelize, DataTypes) {
  var BodyType = sequelize.define('BodyType', {
    type: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return BodyType;
};