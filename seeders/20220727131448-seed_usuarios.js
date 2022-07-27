"use strict";
const bcrypt = require("bcrypt");
const faker = require("faker-br");
const moment = require("moment");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "usuarios",
      [
        {
          id: 1,
          email: faker.internet.email(),
          senha: bcrypt.hashSync('cba321', 10),
          data_cadastro: moment().format("YYYY-MM-DD hh:mm:ss"),
          ativo: 1,
          nome: faker.name.firstName(),
          imagem: faker.internet.avatar(),
        },
        {
          id: 2,
          email: faker.internet.email(),
          senha: bcrypt.hashSync('cba321', 10),
          data_cadastro: moment().format("YYYY-MM-DD hh:mm:ss"),
          ativo: 1,
          nome: faker.name.firstName(),
          imagem: faker.internet.avatar(),
        },
        {
          id: 3,
          email: faker.internet.email(),
          senha: bcrypt.hashSync('cba321', 10),
          data_cadastro: moment().format("YYYY-MM-DD hh:mm:ss"),
          ativo: 1,
          nome: faker.name.firstName(),
          imagem: faker.internet.avatar(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("usuarios", null, {});
  },
};
