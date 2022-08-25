'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('BlogPosts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'title',
      },
      content: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'content',
      },
      published: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'published',
      },
      updated: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'updated',
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'userId',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'Users',
          key: 'id',
        }
      }
    })
  },

  down: async (queryInterface, _Sequelize) => {
     await queryInterface.dropTable('BlogPosts');
  }
};
