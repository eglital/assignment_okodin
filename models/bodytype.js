"use strict";
module.exports = function(sequelize, DataTypes) {
  var BodyType = sequelize.define(
    "BodyType",
    {
      type: DataTypes.STRING
    },
    {
      classMethods: {
        associate: function(models) {
          BodyType.hasMany(models.Profile, {
            foreignKey: "body_typeid"
          });
        }
      }
    }
  );
  return BodyType;
};
