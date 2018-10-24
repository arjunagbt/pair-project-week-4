'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Projects', [{
      name: 'Batu Bara',
      description: 'Tambang batu bara di kalimantan',
      nominal: 3000000000,
      owner_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Projects', null, {});

  }
};
