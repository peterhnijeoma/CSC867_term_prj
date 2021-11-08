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
      'card',
      {
          card_id: {
              type: Sequelize.INTEGER,
              primaryKey: true,
              autoIncrement: true
            },
            card_type:{
              type: Sequelize.STRING(3),
              allowNull: false
            },
            card_color:{
              type: Sequelize.STRING(10),
              allowNull: false
            },
            card_value: {
              type: Sequelize.INTEGER,
              allowNull: false
            }
      });

    /*return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.createTable(
          'card',
          {
            card_id: {
              type: Sequelize.INTEGER,
              primaryKey: true,
              autoIncrement: true
            },
            card_type:{
              type: Sequelize.STRING(3),
              allowNull: false
            },
            card_color:{
              type: Sequelize.STRING(10),
              allowNull: false
            },
            card_value: {
              type: Sequelize.INTEGER,
              allowNull: false
            }
          }, {transaction: t} ),
        queryInterface.createTable(
          'user',
          {
            user_id: {
              type: Sequelize.INTEGER,
              primaryKey: true,
              autoIncrement: true
            },
            game_name:{
              type: Sequelize.STRING(15),
              allowNull: true
            },
            user_name:{
              type: Sequelize.STRING(12),
              allowNull: false
            },
            allow_word: {
              type: Sequelize.STRING(12),
              allowNull: false
            }
          }, {transaction: t} ),
        queryInterface.createTable(
          'game',
          {
            game_id: {
              type: Sequelize.INTEGER,
              primaryKey: true,
              autoIncrement: true
            },
            game_state:{
              type: Sequelize.STRING(3),
              allowNull: false
            },
            createdAt: {
              type: Sequelize.DATE,
              defaultValue: Sequelize.literal('NOW()'),
              allowNull: false
            },
            startedAt: {
              type: Sequelize.DATE,
              allowNull: true
            },
            completedAt: {
              type: Sequelize.DATE,
              allowNull: true
            }
          }, {transaction: t} ),
        queryInterface.createTable(
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
          }, {transaction: t} ),
        queryInterface.createTable(
          'game_card',
          {
            game_id: {
              type: Sequelize.INTEGER,
              references: {
                model: 'game',
                key: 'game_id'
              } //,
              //primaryKey: true
            },
            user_id: {
              type: Sequelize.INTEGER,
              references: {
                model: 'user',
                key: 'user_id'
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
          }, {transaction: t} ),
        queryInterface.addConstraint('game_card', ['game_id','user_id', 'card_id'], {
            type: 'primary key',
            name: 'game_card_primary_key'
         }, {transaction: t}),
        queryInterface.createTable(
          'draw_card',
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
          }, {transaction: t} ),
        queryInterface.addConstraint('draw_card', ['game_id', 'card_id'], {
            type: 'primary key',
            name: 'draw_card_primary_key'
         }, {transaction: t}),
        queryInterface.createTable(
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
          }, {transaction: t}),
        queryInterface.addConstraint('play_card', ['game_id', 'card_id'], {
            type: 'primary key',
            name: 'play_card_primary_key'
        }, { transaction: t})
      ])
    }) */
  }, 

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

     return queryInterface.dropTable('card');

     /* return queryInterface.sequelize.transaction((t) => {
       return Promise.all([
        queryInterface.dropTable('card', {transaction: t}),
        queryInterface.dropTable('user', {transaction: t}),
        queryInterface.dropTable('game', {transaction: t}),
        queryInterface.dropTable('chat', {transaction: t}),
        queryInterface.dropTable('user_game', {transaction: t}),
        queryInterface.dropTable('game_card', {transaction: t}),
        queryInterface.dropTable('draw_card', {transaction: t}),
        queryInterface.dropTable('play_card', {transaction: t})
       ])
     }) */
  }
};
