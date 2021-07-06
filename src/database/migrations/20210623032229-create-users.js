'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.createTable('users', {
     id: {
       type: Sequelize.INTEGER,
       primaryKey: true,
       autoIncrement: true,
       allowNull: false,
     },
     name: {
       type: Sequelize.STRING,
       allownull: false,
     },
     email: {
       type: Sequelize.STRING,
       unique: true,
       allowNull: false,
     },
     password: {
       type: Sequelize.STRING,
       allowNull: false,
     },
     create_at: {
       type: Sequelize.DATE,
       allownull: false
     }, 
     updated_at: {
       type: Sequelize.DATE,
       allownull: false
     }
   })
  },

  down: async (queryInterface, Sequelize) => {
    
    return queryInterface.dropTable('users');

  }
};
