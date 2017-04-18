'use strict';
module.exports = function(sequelize, DataTypes) {
  var MaritalStatus = sequelize.define('MaritalStatus', {
    status: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return MaritalStatus;
};