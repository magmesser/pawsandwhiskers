const sequelize = require("../config/connection");
const { Cat, Dog, User } = require("../models");

const catData = require("./cats.json");
const dogData = require("./dogs.json");
const userData = require("./users.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Cat.bulkCreate(catData, {
    individualHooks: true,
    returning: true,
  });

  await Dog.bulkCreate(dogData, {
    individualHooks: true,
    returning: true,
  });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
