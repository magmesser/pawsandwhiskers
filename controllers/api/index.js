const router = require('express').Router();

const userRoutes = require('./userRoutes');
const catRoutes = require('./catRoutes');
const dogRoutes = require('./dogRoutes');

router.use('/users', userRoutes);
router.use('/cats', catRoutes);
router.use('/dogs', dogRoutes);

// router.use('/pets', catRoutes, dogRoutes);
// Will this work to allow us to use /pets as an endpoint to reach both dogs and cats?

module.exports = router;