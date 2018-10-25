'use strict';

const crypto = require('crypto')

let salt1 = crypto.randomBytes(256).toString('hex')
let password1 = crypto.createHmac('sha256', salt1).update('123456').digest('hex')
let salt2 = crypto.randomBytes(256).toString('hex')
let password2 = crypto.createHmac('sha256', salt2).update('123456').digest('hex')


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      email: 'armedi@outlook.com',
      full_name: 'Armedi',
      salt: salt1,
      password: password1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      email: 'arjuna@gmail.com',
      full_name: 'Arjuna Sarumpaet',
      salt: salt2,
      password: password2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});

  }
};
