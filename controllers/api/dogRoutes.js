const router = require('express').Router();
const { Dog } = require('../../models');
const adminAuth = require('../../utils/auth');
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