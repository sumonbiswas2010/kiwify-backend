const { Sequelize } = require('sequelize');
const db = require('../../config/sequelize.config');
const Course = require('./Course')
const Class = db.define(
  'class',
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    paranoid: true,
  }
);
Class.hasMany(Course, { foreignKey: 'class_id' });
Class.sync({alter: true})
module.exports = Class;
