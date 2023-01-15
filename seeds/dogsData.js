const { Dog } = require('../models')

const dogsData = 
[
    {
        name: "Mochi",
        age: 2,
        gender: "female",
        color: "mixed",
        size: "medium",
        breed: "Beagle Basset Hound"
    },
    {
        name: "Daisy",
        age: 0.5,
        gender: "female",
        color: "brown",
        size: "small",
        breed: "Cocker Spaniel"
    },
    {
        name: "Steve",
        age: 1,
        gender: "male",
        color: "tan",
        size: "small",
        breed: "Beagle"
    },
    {
        name: "Gordon",
        age: 6,
        gender: "male",
        color: "brown",
        size: "large",
        breed: "Chocolate Lab"
    },
    {
        name: "Kailie",
        age: 1,
        gender: "female",
        color: "spotted",
        size: "large",
        breed: "Dalmatian"
    },
    {
        name: "Anna",
        age: 3,
        gender: "female",
        color: "golden",
        size: "large",
        breed: "Golden Retriever"
    }
];

const seedDogs = () => Dog.bulkCreate(dogsData);

module.exports = seedDogs;