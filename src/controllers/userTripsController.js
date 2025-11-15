const userTripService = require('../services/userTripService');
const {
  validateUserTripPayload,
  validateUserTripUpdate,
  buildValidationError
} = require('../utils/validators');
const { normalizeUserTripPayload } = require('../utils/normalizers');

async function listUserTrips(_req, res) {
  const trips = await userTripService.getUserTrips();
  res.json(trips);
}

async function createUserTrip(req, res) {
  const normalized = normalizeUserTripPayload(req.body || {});
  const errors = validateUserTripPayload(normalized);
  if (errors.length) {
    throw buildValidationError(errors);
  }
  const created = await userTripService.createUserTrip(normalized);
  res.status(201).json({ data: created });
}

async function updateUserTrip(req, res) {
  const { id } = req.params;
  const errors = validateUserTripUpdate(req.body || {});
  if (errors.length) {
    throw buildValidationError(errors);
  }
  const updated = await userTripService.updateUserTrip(id, req.body || {});
  if (!updated) {
    return res.status(404).json({ message: 'Viaje no encontrado.' });
  }
  res.json({ data: updated });
}

module.exports = {
  listUserTrips,
  createUserTrip,
  updateUserTrip
};
