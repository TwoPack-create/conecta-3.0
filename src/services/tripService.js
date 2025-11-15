const dataProvider = require('../data');

async function getPublicTrips(options = {}) {
  return dataProvider.listPublicTrips(options);
}

async function createPublicTrip(payload) {
  return dataProvider.createPublicTrip(payload);
}

async function getVehicleTrips(options = {}) {
  return dataProvider.listVehicleTrips(options);
}

async function createVehicleTrip(payload) {
  return dataProvider.createVehicleTrip(payload);
}

module.exports = {
  getPublicTrips,
  createPublicTrip,
  getVehicleTrips,
  createVehicleTrip
};
