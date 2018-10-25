'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Projects', [{
      name: 'Batu Bara',
      description: 'Tambang batu bara di kalimantan',
      nominal_needed: 3000000000,
      owner_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
      static: 'monkaS.png'
    }, ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Projects', null, {});

  }
};
