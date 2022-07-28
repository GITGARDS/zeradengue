var express = require("express");
var router = express.Router();
const { check } = require("express-validator");

//----------------------------------------------
const multer = require("multer");
const path = require("path");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join("public", "images", "avatar"));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + String(file.originalname).replace(" ", "-"));
  },
});
const upload = multer({ storage: storage });
//----------------------------------------------

const userController = require("./../controllers/UsuarioController");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.render("usuario/index", { title: "Home" });
});

/* GET nova denuncia. */
router.get("/denuncia", function (req, res, next) {
  res.render("usuario/denuncia", { title: "Denuncia" });
});

/* GET nova denuncia-selecionada. */
router.get("/denuncia/:id", function (req, res, next) {
  res.render("usuario/denuncia-selecionada", { title: "Denuncia Selecionada" });
});

/* GET nova usuario-upate. */
router.get("/perfil", function (req, res, next) {
  res.render("usuario/usuario", { title: "Perfil" });
});

/* POST */
router.put("/perfil", upload.any(), userController.edit);

module.exports = router;
