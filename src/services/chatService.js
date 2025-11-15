const dataProvider = require('../data');

async function getMessagesByTrip(tripId) {
  return dataProvider.getChatMessages(tripId);
}

async function addMessageToTrip(tripId, message) {
  return dataProvider.createChatMessage(tripId, message);
}

module.exports = {
  getMessagesByTrip,
  addMessageToTrip
};
