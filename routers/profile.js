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
  let bodyTypes;
  let locations;
  let maritalStatuses;
  let occupations;
  let educations;
  let pets;
  BodyType.findAll({})
    .then(type => {
      bodyTypes = type;
      Location.findAll({}).then(loc => {
        locations = loc;
        MaritalStatus.findAll({}).then(ms => {
          maritalStatuses = ms;
          Occupation.findAll({}).then(occ => {
            occupations = occ;
            Education.findAll({}).then(edu => {
              educations = edu;
              Pet.findAll({}).then(pt => {
                pets = pt;
                res.render("profiles/new", {
                  bodyTypes,
                  locations,
                  maritalStatuses,
                  occupations,
                  educations,
                  pets
                });
              });
            });
          });
        });
      });
    })
    .catch(e => res.status(500).send(e.stack));
});

// ----------------------------------------
// Create
// ----------------------------------------
router.post("/profile/new", (req, res) => {
  // Hoist variables to be used later
  var user;
  var profile;

  // Filter params
  var userParams = {
    username: req.body.user.username,
    email: req.body.user.email
  };
  var profileParams = {
    gender: req.body.user.profile.gender,
    image: req.body.user.profile.image,
    age: req.body.user.profile.age,
    about: req.body.user.profile.about,
    talents: req.body.user.profile.talents,
    favorite_things: req.body.user.profile.favorite_things,
    height: req.body.user.profile.height
  };

  // Begin transaction
  sequelize.transaction(t => {
    // Don't create a user if
    // already exists
    return (
      User.findOrCreate({
        defaults: userParams,
        where: { email: userParams.email },
        transaction: t
      })
        // Array returned from findOrCreate
        // so must use `spread`
        .spread(result => {
          // Set user
          user = result;

          // Add userId to associated models
          profileParams.userid = user.id;

          // Find or create user profile
          return Profile.findOrCreate({
            defaults: profileParams,
            where: { userId: user.id },
            transaction: t
          });
        })
        // Array returned so spread
        .spread(result => {
          // Set profile
          profile = result;

          // Set profileId for associations
          user.profileId = profile.id;

          // Update user with profileId
          return User.update(
            { profileId: profile.id },
            {
              where: { id: user.id },
              limit: 1,
              transaction: t
            }
          );
        })
        .then(() => {
          // Set address profileId
          addressParams.profileId = profile.id;

          // Find or create address
          return Address.findOrCreate({
            defaults: addressParams,
            where: { profileId: profile.id },
            transaction: t
          });
        })
        // Array returned so spread
        .spread(result => {
          // Set address
          address = result;

          return Profile.update(
            { addressId: address.id },
            {
              where: { id: profile.id },
              limit: 1,
              transaction: t
            }
          );
        })
        .then(() => {
          // Find or create user educations
          var promises = educationsParams.map(ep => {
            return Education.findOrCreate({
              defaults: ep,
              where: { name: ep.name, userId: ep.userId },
              transaction: t
            });
          });
          return Promise.all(promises);
        })
        // Manually spread nested arrays
        // and save into variable
        .then(result => {
          return (educations = result.map(r => r[0]));
        })
        .then(() => {
          // Find or create skills
          var promises = skillsParams.map(sp => {
            return Skill.findOrCreate({
              defaults: sp,
              where: { name: sp.name, userId: sp.userId },
              transaction: t
            });
          });
          return Promise.all(promises);
        })
        // Manually spread nested arrays
        .then(result => {
          return (skills = result.map(r => r[0]));
        })
        // Create new job application
        .then(() => {
          return JobApplication.create(jobApplicationParams, {
            transaction: t
          });
        })
        // Redirect to job application
        .then(result => {
          req.flash("success", "Job Application created!");
          jobApplication = result;
          res.redirect(h.jobApplicationPath(jobApplication.id));
        })
        .catch(e => {
          if (e.errors) {
            e.errors.forEach(err => req.flash("error", err.message));
            res.render("job_applications/new");
          } else {
            res.status(500).send(e.stack);
          }
        })
    );
  });
});

module.exports = router;
