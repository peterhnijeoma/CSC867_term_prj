'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    return queryInterface.createTable(
          'user_game',
          {
            game_id: {
              type: Sequelize.INTEGER,
              references: {
                model: 'game',
                key: 'game_id'
              }
            },
            user_id: {
              type: Sequelize.INTEGER,
              references: {
                model: 'user',
                key: 'user_id'
              } 
            }
          });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    return queryInterface.dropTable('user_game');
  }
};
