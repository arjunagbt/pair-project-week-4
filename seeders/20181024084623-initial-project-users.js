'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ProjectUsers', [{
      funder_id: 2,
      project_id: 1,
      nominal: 3000000000,
      createdAt: new Date(),
      updatedAt: new Date()
    }, ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ProjectUsers', null, {});

  }
};
