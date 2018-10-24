'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      email: 'armedi@outlook.com',
      password: '123456',
      full_name: 'Armedi',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      email: 'arjuna@gmail.com',
      password: '123456',
      full_name: 'Arjuna Sarumpaet',
      createdAt: new Date(),
      updatedAt: new Date()
    }, ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});

  }
};
