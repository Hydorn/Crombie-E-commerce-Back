"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("ratings", {
      id: {
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        type: Sequelize.UUID,
      },
      idProyect: {
        allowNull:false,
        type: Sequelize.UUID,
        references: {
          model: "proyects",
          key: "id",
        },
      },
      idUser: {
        allowNull:false,
        type: Sequelize.UUID,
        references: {
          model: "users",
          key: "id",
        },
      },
      punctuation: {
        type: Sequelize.INTEGER,
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
      deletedAt: {
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("ratings");
  },
};
