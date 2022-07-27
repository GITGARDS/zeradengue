var express = require("express");
var router = express.Router();
const { check } = require("express-validator");

const userController = require("./../controllers/UsuarioController");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Login" });
});
/* GET cadastrar page. */
router.get("/cadastro", function (req, res, next) {
  res.render("cadastro", { title: "Cadastro" });
});

/* POST */
router.post(
  "/cadastro",
  [
    check("email", "Email e campo obrigatorio").isEmail(),
    check("senha", "Senha deve ter de 3 a 8 caracteres").isLength({
      min: 3,
      max: 8,
    }),
  ],
  userController.save
);

module.exports = router;
