'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

     return queryInterface.addConstraint('user_game', {
         fields: ['game_id','user_id'], 
         type: 'primary key',
         name: 'user_game_primary_key'
      })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

     return queryInterface.removeConstraint('user_game', 'user_game_primary_key');
  }
};
