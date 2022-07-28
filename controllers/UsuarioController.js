const Usuario = require("./../models/Usuario");
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");

module.exports = {
  save: async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
      }

      let { email, senha } = req.body;
      senha = bcrypt.hashSync(senha, 10);
      console.log("body:", req.body);
      console.log("Usuario:", Usuario);

      let exist = await Usuario.findOne({ where: { email } });

      if (exist) {
        return res.send({ error: [{ msg: "email ja existe" }] });
      }
      let result = await Usuario.create({ email, senha });

      result.senha = undefined;
      res.status(200).send({ ok: result });
    } catch (error) {
      res.send(error);
    }
  },
  edit: async (req, res) => {
    try {
      let id = 1;
      let { nome } = req.body;
      let { files } = req;

      let result = await Usuario.update(
        { nome, imagem: files[0].filename },
        { where: { id } }
      );
      // result.senha = undefined;
      res.status(200).send({ result });
    } catch (error) {
      res.send(error);
    }
  },
  login: async (req, res) => {
    try {
      let { email, senha } = req.body;
      const user = await Usuario.findOne({ where: { email } });
      console.log('usuario: ', user)
      if (!user) {
        return res.send({ error: [{ msg: "email ou senha invalido!" }] });
      }
      if (!user.ativo) {
        return res.send({ error: [{ msg: "Usuario bloqueado!" }] });
      }
      const mathPassword = bcrypt.compareSync(senha, user.senha);
      if (!mathPassword) {
        return res.send({ error: [{ msg: "email ou senha invalido!" }] });
      }
      res.send("Usuario Conectado!");
    } catch (error) {
      res.send({ error: [{ msg: "erro" }] });
    }
  },
};
