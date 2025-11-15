const tripService = require('../services/tripService');
const {
  validatePublicTripPayload,
  buildValidationError
} = require('../utils/validators');
const {
  normalizePublicTripPayload,
  normalizePublicTripFilters
} = require('../utils/normalizers');

async function listPublicTrips(req, res) {
  const { filters, pagination, metaFilters } = normalizePublicTripFilters(req.query || {});
  const result = await tripService.getPublicTrips({ filters, pagination });

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

async function createPublicTrip(req, res) {
  const sanitized = normalizePublicTripPayload(req.body || {});
  const errors = validatePublicTripPayload(sanitized);
  if (errors.length) {
    throw buildValidationError(errors);
  }

  const created = await tripService.createPublicTrip(sanitized);
  res.status(201).json({ data: created });
}

module.exports = {
  listPublicTrips,
  createPublicTrip
};
