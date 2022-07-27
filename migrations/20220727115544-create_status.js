'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('status', { 
      id: Sequelize.INTEGER,
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        comment: "null",
        autoIncrement: true,
      },
      descricao: {
        type: Sequelize.STRING(45),
        allowNull: false,
        comment: "null",
      },
    });
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('status');
  }
};
