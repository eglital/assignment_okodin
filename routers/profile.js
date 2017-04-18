var express = require("express");
var router = express.Router();
var models = require("./../models");
var {
  User,
  Profile,
  BodyType,
  Location,
  MaritalStatus,
  Occupation,
  Education,
  Pet
} = models;
var sequelize = models.sequelize;

// ----------------------------------------
// New
// ----------------------------------------
router.get("/profile/new", (req, res) => {
  let bodyType;
  let location;
  let maritalStatus;
  let occupation;
  let education;
  let pet;
  BodyType.findAll({})
    .then(type => {
      bodyType = type;
      Location.findAll({}).then(loc => {
        location = loc;
        MaritalStatus.findAll({}).then(ms => {
          maritalStatus = ms;
          Occupation.findAll({}).then(occ => {
            occupation = occ;
            Education.findAll({}).then(edu => {
              education = edu;
              Pet.findAll({}).then(pt => {
                pet = pt;
                res.render("profiles/new", {
                  bodyType,
                  location,
                  maritalStatus,
                  occupation,
                  education,
                  pet
                });
              });
            });
          });
        });
      });
    })
    .catch(e => res.status(500).send(e.stack));
});
