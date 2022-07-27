"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("estados", {
      id: Sequelize.INTEGER,
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        comment: "null",
        autoIncrement: true,
      },
      sigla: {
        type: Sequelize.CHAR(2),
        allowNull: false,
        comment: "null",
      },
      descricao: {
        type: Sequelize.STRING(50),
        allowNull: false,
        comment: "null",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("estados");
  },
};
