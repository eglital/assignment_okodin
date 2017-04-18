"use strict";
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable("Profiles", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      image: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INT
      },
      locationid: {
        type: Sequelize.INT
      },
      about: {
        type: Sequelize.TEXT
      },
      talents: {
        type: Sequelize.STRING
      },
      favorite_things: {
        type: Sequelize.STRING
      },
      why_message: {
        type: Sequelize.TEXT
      },
      gender: {
        type: Sequelize.STRING
      },
      maritalid: {
        type: Sequelize.INT
      },
      height: {
        type: Sequelize.STRING
      },
      body_typeid: {
        type: Sequelize.INT
      },
      have_kids: {
        type: Sequelize.BOOLEAN
      },
      petsid: {
        type: Sequelize.INT
      },
      educationid: {
        type: Sequelize.INT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW")
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW")
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable("Profiles");
  }
};
