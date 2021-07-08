require('dotenv').config({
  // Se eu tiver uma variavel Node_env == a test, buscarei o .env.test, senao, busco o env de desenvolvimento
  path: process.env.NODE_ENV === "test" ? '.env.test' : '.env'
})

module.exports = {
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  dialect: process.env.DB_DIALECT || 'postgres',
  database: process.env.NAME,
  storage: "./__tests_database.sqlite",
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoreAll:true

  }

}