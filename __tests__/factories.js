const { factory } = require('factory-girl');
const { User } = require('../src/app/models');

factory.define("User", User, {
    name:'kayc',
    email:'kayckennedy',
    password:'123'
})

module.exports = factory