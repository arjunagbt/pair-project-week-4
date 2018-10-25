'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Projects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      nominal_needed: {
        allowNull: false,
        type: Sequelize.BIGINT
      },
      nominal_now: {
        type: Sequelize.BIGINT,
        defaultValue: 0
      },
      nominal_paid: {
        defaultValue: 0,
        type: Sequelize.BIGINT
      },
      owner_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: 'id'
        },
        onDelete: 'set null'
      },
      status: {
        defaultValue: 1,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Projects');
  }
};