const dataProvider = require('../data');

async function getUserTrips() {
  return dataProvider.getUserTrips();
}

async function createUserTrip(payload) {
  return dataProvider.createUserTrip(payload);
}

async function updateUserTrip(id, updates) {
  return dataProvider.updateUserTrip(id, updates);
}

module.exports = {
  getUserTrips,
  createUserTrip,
  updateUserTrip
};
