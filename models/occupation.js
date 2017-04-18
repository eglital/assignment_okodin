'use strict';
module.exports = function(sequelize, DataTypes) {
  var Occupation = sequelize.define('Occupation', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Occupation;
};