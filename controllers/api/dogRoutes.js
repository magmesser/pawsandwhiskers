const router = require('express').Router();
const { Dog } = require('../../models');
const adminAuth = require('../../utils/auth');

// GET dog by id/image link
// router.get("/:id", async (req, res) => {
//     try {
//       const dogData = await Dog.findOne({
//         where: {id: req.params.id}
//       });
  
//       const dog = dogData.get({ plain: true });
  
//       res.render('single-pet', { 
//         ...dog,
//         logged_in: req.session.logged_ing });
//     } catch (err) {
//       console.log(err);
//       res.status(500).json(err);
//     }
//   });

// adminAuth
router.post('/', async (req, res) => {
    try {
        const newDog = await Dog.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newDog);
    } catch (err) {
        res.status(400).json(err);
    }
});
// adminAuth
router.delete('/:id', async (req, res) => {
    try {
        const dogData = await Dog.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!dogData) {
            res.status(404).json({ message: 'No dog with that id.' });
            return;
        }

        res.status(200).json(dogData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;