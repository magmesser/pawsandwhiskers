const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');

router.use('/', homeRoutes);
// router.use('/api', apiRoutes); will uncomment after building

module.exports = router;