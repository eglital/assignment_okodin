"use strict";
module.exports = function(sequelize, DataTypes) {
  var MaritalStatus = sequelize.define(
    "MaritalStatus",
    {
      status: DataTypes.STRING
    },
    {
      classMethods: {
        associate: function(models) {
          MaritalStatus.hasMany(models.Profile, {
            foreignKey: "marital_statusid"
          });
        }
      }
    }
  );
  return MaritalStatus;
};
