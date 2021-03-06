"use strict";
module.exports = function(sequelize, DataTypes) {
  var Location = sequelize.define(
    "Location",
    {
      distance: DataTypes.INTEGER,
      city: DataTypes.STRING
    },
    {
      classMethods: {
        associate: function(models) {
          // associations can be defined here
          Location.hasMany(models.Profile, {
            foreignKey: "locationid"
          });
        }
      }
    }
  );
  return Location;
};
