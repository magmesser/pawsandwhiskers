const router = require('express').Router();
const { Dog, Cat, User } = require('../models');
// const withAuth = require('../utils/auth'); withAuth not required on routes at this time

// Get all pets - cats and dogs
router.get('/', async (req, res) => {
    try {
        const dogData = await Dog.findAll({});
        const catData = await Cat.findAll({});

        const dogs = dogData.map((dog) => dog.get({ plain: true }));
        const cats = catData.map((cat) => cat.get({ plain: true }));

        res.render('homepage', { 
            dogs, cats, 
            logged_in: req.session.logged_in 
          });
    } catch (err) {
        res.status(500).json(err);
    }
});

// /pets/:id get by id
router.get('/pets/:id', async (req, res) => {
  try {

        const dogData = await Dog.findByPk(req.params.id,{});
        const catData = await Cat.findByPk(req.params.id,{});

        const dogs = dogData.get((dog) => dog.get({ plain: true }));
        const cats = catData.get((cat) => cat.get({ plain: true }));
    
        res.render('homepage', { 
          ...dog, ...cat, 
          logged_in: req.session.logged_in 
        });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Render login screen
router.get('/login', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
    res.render('homepage');
  });
  
  module.exports = router;