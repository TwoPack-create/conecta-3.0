const dataProvider = require('../data');

async function listPanicAlerts(options = {}) {
  return dataProvider.listPanicAlerts(options);
}

async function createPanicAlert(payload = {}) {
  return dataProvider.createPanicAlert(payload);
}

module.exports = {
  listPanicAlerts,
  createPanicAlert
};
