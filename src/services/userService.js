const dataProvider = require('../data');

async function getUsers() {
  return dataProvider.getUsers();
}

async function getStatusSnapshot() {
  const counts = await dataProvider.getStatusCounts();
  return {
    status: 'ok',
    timestamp: new Date().toISOString(),
    counts
  };
}

module.exports = {
  getUsers,
  getStatusSnapshot
};
