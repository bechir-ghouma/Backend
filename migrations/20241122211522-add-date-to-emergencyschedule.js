'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('EmergencyClosures', 'date', {
      type: Sequelize.DATEONLY,
      allowNull: true,
  });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('EmergencyClosures', 'date');
  }
};
