const panicAlertService = require('../services/panicAlertService');
const { validatePanicAlertPayload, buildValidationError } = require('../utils/validators');

async function listPanicAlerts(req, res) {
  const limit = Math.max(1, Math.min(parseInt(req.query.limit, 10) || 10, 50));
  const alerts = await panicAlertService.listPanicAlerts({ limit });
  res.json({
    data: alerts.items,
    meta: {
      total: alerts.total,
      limit: alerts.limit,
      generatedAt: new Date().toISOString()
    }
  });
}

async function createPanicAlert(req, res) {
  const payload = req.body || {};
  const errors = validatePanicAlertPayload(payload);
  if (errors.length) {
    throw buildValidationError(errors);
  }
  const created = await panicAlertService.createPanicAlert(payload);
  res.status(201).json({ data: created });
}

module.exports = {
  listPanicAlerts,
  createPanicAlert
};
