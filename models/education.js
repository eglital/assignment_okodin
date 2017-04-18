"use strict";
module.exports = function(sequelize, DataTypes) {
  var Education = sequelize.define(
    "Education",
    {
      level: DataTypes.STRING
    },
    {
      classMethods: {
        associate: function(models) {
          Education.hasMany(models.Profile, {
            foreignKey: "educationid"
          });
        }
      }
    }
  );
  return Education;
};
