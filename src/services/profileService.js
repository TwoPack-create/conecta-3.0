const dataProvider = require('../data');

async function getProfile() {
  return dataProvider.getUserProfile();
}

async function updateProfile(updates) {
  return dataProvider.updateUserProfile(updates);
}

module.exports = {
  getProfile,
  updateProfile
};
