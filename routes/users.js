var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('usuario/index', { title: 'Home' });
});

/* GET nova denuncia. */
router.get('/denuncia', function(req, res, next) {
  res.render('usuario/denuncia', { title: 'Denuncia' });
});

/* GET nova denuncia-selecionada. */
router.get('/denuncia/:id', function(req, res, next) {
  res.render('usuario/denuncia-selecionada', { title: 'Denuncia Selecionada' });
});

/* GET nova usuario-upate. */
router.get('/perfil', function(req, res, next) {
  res.render('usuario/usuario', { title: 'Perfil' });
});

module.exports = router;
