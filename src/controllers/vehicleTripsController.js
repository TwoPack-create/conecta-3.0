const tripService = require('../services/tripService');
const {
  validateVehicleTripPayload,
  buildValidationError
} = require('../utils/validators');
const {
  normalizeVehicleTripPayload,
  normalizeVehicleTripFilters
} = require('../utils/normalizers');

async function listVehicleTrips(req, res) {
  const { filters, pagination, metaFilters } = normalizeVehicleTripFilters(req.query || {});
  const result = await tripService.getVehicleTrips({ filters, pagination });
  res.json({
    data: result.items,
    meta: {
      total: result.total,
      limit: result.limit,
      offset: result.offset,
      filters: metaFilters,
      generatedAt: new Date().toISOString()
    }
  });
}

async function createVehicleTrip(req, res) {
  const normalized = normalizeVehicleTripPayload(req.body || {});
  const errors = validateVehicleTripPayload(normalized);
  if (errors.length) {
    throw buildValidationError(errors);
  }

  const created = await tripService.createVehicleTrip(normalized);
  res.status(201).json({ data: created });
}

module.exports = {
  listVehicleTrips,
  createVehicleTrip
};
