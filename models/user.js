"use strict";
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define(
    "User",
    {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      profileid: DataTypes.INT
    },
    {
      classMethods: {
        associate: function(models) {
          // associations can be defined here
        }
      }
    }
  );
  return User;
};
