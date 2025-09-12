'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('Usuarios', 'refresh_token', {
      type: Sequelize.STRING,
      allowNull: true,
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn('Usuarios', 'refresh_token', {
      type: Sequelize.STRING,
      allowNull: false,
    })
  }
};
