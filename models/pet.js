"use strict";
module.exports = function(sequelize, DataTypes) {
  var Pet = sequelize.define(
    "Pet",
    {
      species: DataTypes.STRING
    },
    {
      classMethods: {
        associate: function(models) {
          Pet.hasMany(models.Profile, {
            foreignKey: "petid"
          });
        }
      }
    }
  );
  return Pet;
};
