"use strict";
module.exports = function(sequelize, DataTypes) {
  var Occupation = sequelize.define(
    "Occupation",
    {
      name: DataTypes.STRING
    },
    {
      classMethods: {
        associate: function(models) {
          Occupation.hasMany(models.Profile, {
            foreignKey: "occupatioinid"
          });
        }
      }
    }
  );
  return Occupation;
};
