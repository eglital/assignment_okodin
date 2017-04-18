"use strict";
module.exports = function(sequelize, DataTypes) {
  var Profile = sequelize.define(
    "Profile",
    {
      image: DataTypes.STRING,
      age: DataTypes.INT,
      locationid: DataTypes.INT,
      about: DataTypes.TEXT,
      talents: DataTypes.STRING,
      favorite_things: DataTypes.STRING,
      why_message: DataTypes.TEXT,
      gender: DataTypes.STRING,
      maritalid: DataTypes.INT,
      height: DataTypes.STRING,
      body_typeid: DataTypes.INT,
      have_kids: DataTypes.BOOLEAN,
      petsid: DataTypes.INT,
      educationid: DataTypes.INT
    },
    {
      classMethods: {
        associate: function(models) {
          // associations can be defined here
          Profile.hasOne(models.User, {
            foreignKey: "profileId"
          });
          Profile.belongsTo(models.Location, {
            foreignKey: "locationid"
          });
        }
      }
    }
  );
  return Profile;
};
