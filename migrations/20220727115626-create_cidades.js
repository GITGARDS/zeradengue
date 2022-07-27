"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("cidades", {
      id: Sequelize.INTEGER,
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        comment: "null",
        autoIncrement: true,
      },
      descricao: {
        type: Sequelize.STRING(50),
        allowNull: false,
        comment: "null",
      },
      cep: {
        type: Sequelize.STRING(8),
        allowNull: false,
        comment: "null",
      },
      estado_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        comment: "null",
        references: {
          model: "estados",
          key: "id",
        },
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("cidades");
  },
};
