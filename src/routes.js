const routes = require('express').Router();
const { User } = require('./app/models');

User.create({ name: 'kayc', email: 'kayc.com', password: '123'});

// Definição de Rotas

module.exports = routes;
