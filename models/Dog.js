const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Dog extends Model {}

Dog.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false,
            },
        gender: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            validate: {
                isIn: [['male', 'female']],
                },
            },
        color: {
            type: DataTypes.STRING,
            allowNull: false,
            },
        size: {
            type: DataTypes.STRING,
            allowNull: false,
            },
        breed: {
            type: DataTypes.STRING,
            allowNull: false,
            },
        filename: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'dog',
  }
);

module.exports = Dog;