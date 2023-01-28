const router = require("express").Router();
const { Cat } = require("../../models");
const { adminAuth, withAuth } = require("../../utils/auth");

// Create Cat
router.post("/", async (req, res) => {
  try {
    const newCat = await Cat.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newCat);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Delete Cat by ID
router.delete("/:id", async (req, res) => {
  try {
    const catData = await Cat.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!catData) {
      res.status(404).json({ message: "No cat with that id." });
      return;
    }

    res.status(200).json(catData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;