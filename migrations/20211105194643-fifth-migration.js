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
      'chat',
      {
        time_stamp: {
          type: Sequelize.DATE,
          primaryKey: true,
          defaultValue: Sequelize.literal('NOW()'),
          allowNull: false
        },
        msg_sender:{
          type: Sequelize.INTEGER,
          allowNull: false
        },
        message:{
          type: Sequelize.STRING(255),
          allowNull: false
        },
        chat_location: {
          type: Sequelize.INTEGER,
          allowNull: false
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

     return queryInterface.dropTable('chat');
  }
};
