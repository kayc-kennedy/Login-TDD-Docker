const routes = require('express').Router();

// Controllers 
const SessionController = require('../src/app/controllers/SessionController')

routes.post('/sessions', SessionController.store)

module.exports = routes;
