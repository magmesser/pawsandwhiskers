const router = require("express").Router();
const { Dog, Cat, User } = require("../models");
// const withAuth = require('../utils/auth'); withAuth not required on routes at this time

router.get("/", async (req, res) => {
  try {
    res.render("homepage", {});
  } catch (err) {
    res.status(500).json(err);
  }
});

// Render login screen
router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("homepage");
});

router.get("/pets", async (req, res) => {
  try {
    const dogData = await Dog.findAll({});

    const dogs = dogData.map((dog) => dog.get({ plain: true }));

    res.render("pets", {
      dogs,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
