"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("usuarios", { 
      id: Sequelize.INTEGER,
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        comment: "null",
        autoIncrement: true,
      },
      email: {
        type: Sequelize.STRING(50),
        allowNull: false,
        comment: "null",
      },
      senha: {
        type: Sequelize.STRING(255),
        allowNull: false,
        comment: "null",
      },
      data_cadastro: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn("current_timestamp"),
        comment: "null",
      },
      ativo: {
        type: Sequelize.INTEGER(1),
        allowNull: false,
        defaultValue: "1",
        comment: "null",
      },
      nome: {
        type: Sequelize.STRING(45),
        allowNull: false,
        defaultValue: "Anonimo",
        comment: "null",
      },
      imagem: {
        type: Sequelize.STRING(200),
        allowNull: false,
        defaultValue: "avatar.png",
        comment: "null",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("usuarios");
  },
};
