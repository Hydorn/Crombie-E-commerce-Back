"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("ratings", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.UUIDV4,
      },
      idProyect: {
        type: Sequelize.UUIDV4,
        references: {
          model: "proyect",
          key: "id",
        },
      },
      idUser: {
        type: Sequelize.UUIDV4,
        references: {
          model: "user",
          key: "id",
        },
      },
      punctuation: {
        type: Sequelize.NUMBER,
      },
      comments: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("ratings");
  },
};
