const chatService = require('../services/chatService');
const { buildValidationError } = require('../utils/validators');

async function listMessages(req, res) {
  const { tripId } = req.params;
  if (!tripId) {
    throw buildValidationError(['tripId']);
  }
  const messages = await chatService.getMessagesByTrip(tripId);
  res.json({ data: messages });
}

async function postMessage(req, res) {
  const { tripId } = req.params;
  if (!tripId) {
    throw buildValidationError(['tripId']);
  }
  const { senderId, senderName, text, avatar } = req.body || {};
  if (!text) {
    throw buildValidationError(['text']);
  }
  const message = await chatService.addMessageToTrip(tripId, {
    senderId,
    senderName,
    text,
    avatar
  });
  res.status(201).json({ data: message });
}

module.exports = {
  listMessages,
  postMessage
};
