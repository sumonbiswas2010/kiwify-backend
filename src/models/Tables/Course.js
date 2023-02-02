const { Sequelize } = require('sequelize');
const db = require('../../config/sequelize.config');
const Class = require('./Class');
const Course = db.define(
  'course',
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
    description_top: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description_bottom: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    media: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
    },
    attachments: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    class_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    rating: {
      type: Sequelize.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
  },
  {
    paranoid: true,
  }
);

Course.sync({ alter: true });

module.exports = Course;
