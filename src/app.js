require('dotenv').config({
    // Se eu tiver uma variavel Node_env == a test, buscarei o .env.test, senao, busco o env de desenvolvimento
    path: process.env.NODE_ENV === "test" ? '.env.test' : '.env'
})

const express = require('express');

class AppController {
    constructor(){
        this.express = express();
        
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.express.use(express.json());
    }

    routes() {
        this.express.use(require('./routes'));
    }
}

module.exports = new AppController().express; 