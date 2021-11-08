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
      'play_card',
      {
        game_id: {
          type: Sequelize.INTEGER,
          references: {
            model: 'game',
            key: 'game_id'
          }  //,
          //primaryKey: true
        },
        card_id: {
          type: Sequelize.INTEGER,
          references: {
            model: 'card',
            key: 'card_id'
          }  //,
          //primaryKey: true
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

    return queryInterface.dropTable('play_card');
  }
};
