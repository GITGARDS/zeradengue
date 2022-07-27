"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("ocorrencias", {
      id: Sequelize.INTEGER,

      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        comment: "null",
        autoIncrement: true,
      },
      imagem: {
        type: Sequelize.STRING(200),
        allowNull: false,
        defaultValue: "no_image.png",
        comment: "null",
      },
      descricao: {
        type: Sequelize.STRING(50),
        allowNull: false,
        comment: "null",
      },
      endereco: {
        type: Sequelize.STRING(80),
        allowNull: false,
        comment: "null",
      },
      bairro: {
        type: Sequelize.STRING(80),
        allowNull: false,
        comment: "null",
      },
      data_hora: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn("current_timestamp"),
        comment: "null",
      },
      usuarios_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        comment: "null",
        references: {
          model: "usuarios",
          key: "id",
        },
      },
      status_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: "1",
        comment: "null",
        references: {
          model: "status",
          key: "id",
        },
      },
      cidades_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        comment: "null",
        references: {
          model: "cidades",
          key: "id",
        },
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("ocorrencias");
  },
};
