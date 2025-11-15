const dataProvider = require('../data');

async function createRegistration(payload) {
  return dataProvider.createRegistration(payload);
}

module.exports = {
  createRegistration
};
