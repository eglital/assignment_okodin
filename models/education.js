'use strict';
module.exports = function(sequelize, DataTypes) {
  var Education = sequelize.define('Education', {
    level: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Education;
};