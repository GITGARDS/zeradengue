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
};
