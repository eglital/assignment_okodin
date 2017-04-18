"use strict";
module.exports = function(sequelize, DataTypes) {
  var Profile = sequelize.define(
    "Profile",
    {
      image: DataTypes.STRING,
      age: DataTypes.INTEGER,
      locationid: DataTypes.INTEGER,
      about: DataTypes.TEXT,
      talents: DataTypes.STRING,
      favorite_things: DataTypes.STRING,
      why_message: DataTypes.TEXT,
      gender: DataTypes.STRING,
      maritalid: DataTypes.INTEGER,
      height: DataTypes.STRING,
      body_typeid: DataTypes.INTEGER,
      have_kids: DataTypes.BOOLEAN,
      petsid: DataTypes.INTEGER,
      educationid: DataTypes.INTEGER,
      userid: DataTypes.INTEGER
    },
    {
      classMethods: {
        associate: function(models) {
          // associations can be defined here
          Profile.hasOne(models.User, {
            foreignKey: "profileid"
          });
          Profile.belongsTo(models.Location, {
            foreignKey: "locationid"
          });
          Profile.belongsTo(models.MaritalStatus, {
            foreignKey: "maritalid"
          });
          Profile.belongsTo(models.BodyType, {
            foreignKey: "body_typeid"
          });
          Profile.belongsTo(models.Pet, {
            foreignKey: "petsid"
          });
          Profile.belongsTo(models.Education, {
            foreignKey: "educationid"
          });
        }
      }
    }
  );
  return Profile;
};
