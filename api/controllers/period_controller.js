var express = require('express');
var router = express.Router();
var constants = require('../../config/constants')();
var helpers = require('../../config/helpers');
const { indexCss, indexJs, addJs, editJs } = require('../helpers/period_helper');

router.get('', (req, res, next) => {
  // response
  var locals = {
    constants: constants,
    title: 'Gestión de Periodos Académicos',
    helpers: helpers,
    csss: indexCss(),
    session: req.session,
    jss: indexJs(),
    name: 'Pepe',
    contents: {},
  };
  res.status(200).render('period/index', locals);
});

router.get('/add', (req, res, next) => {
  // response
  var locals = {
    constants: constants,
    title: 'Gestión de Periodos Académicos - Agregar',
    helpers: helpers,
    csss: indexCss(),
    session: req.session,
    jss: addJs(),
    name: 'Pepe',
    contents: {},
  };
  res.status(200).render('period/add', locals);
});

router.get('/edit', (req, res, next) => {
  // response
  var locals = {
    constants: constants,
    title: 'Gestión de Periodos Académicos - Editar',
    helpers: helpers,
    csss: indexCss(),
    session: req.session,
    jss: editJs(),
    name: 'Pepe',
    contents: {},
  };
  res.status(200).render('period/edit', locals);
});

module.exports = router; 
