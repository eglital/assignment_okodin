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
        type: Sequelize.INTEGER
      },
      locationid: {
        type: Sequelize.INTEGER
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
        type: Sequelize.INTEGER
      },
      height: {
        type: Sequelize.STRING
      },
      body_typeid: {
        type: Sequelize.INTEGER
      },
      have_kids: {
        type: Sequelize.BOOLEAN
      },
      petsid: {
        type: Sequelize.INTEGER
      },
      educationid: {
        type: Sequelize.INTEGER
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
