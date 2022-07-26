var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('usuario/index');
});

/* GET nova denuncia. */
router.get('/denuncia', function(req, res, next) {
  res.render('usuario/denuncia');
});

/* GET nova denuncia-selecionada. */
router.get('/denuncia/:id', function(req, res, next) {
  res.render('usuario/denuncia-selecionada');
});

/* GET nova usuario-upate. */
router.get('/user/:id', function(req, res, next) {
  res.render('usuario/user-update');
});

module.exports = router;
