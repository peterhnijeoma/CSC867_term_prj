'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    return queryInterface.addConstraint('game_card',  {
      fields: ['game_id','user_id', 'card_id'],
      type: 'primary key',
      name: 'game_card_primary_key'
   });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

     return queryInterface.removeConstraint('game_card', 'game_card_primary_key');
  }
};
