const dataProvider = require('../data');

async function getSafetyReports(options = {}) {
  return dataProvider.listSafetyReports(options);
}

async function createSafetyReport(payload) {
  return dataProvider.createSafetyReport(payload);
}

async function voteSafetyReport(id, delta) {
  return dataProvider.voteSafetyReport(id, delta);
}

module.exports = {
  getSafetyReports,
  createSafetyReport,
  voteSafetyReport
};
