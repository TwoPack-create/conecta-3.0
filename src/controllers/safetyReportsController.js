const reportService = require('../services/reportService');
const { buildValidationError, validateSafetyReportPayload } = require('../utils/validators');
const { clampNumber } = require('../utils/normalizers');

function normalizeSafetyFilters(query = {}) {
  const filters = {};
  if (query.type && query.type !== 'todos') {
    filters.type = query.type.toLowerCase();
  }
  if (query.severity && query.severity !== 'todos') {
    filters.severity = query.severity.toLowerCase();
  }
  const limit = clampNumber(parseInt(query.limit, 10), 1, 50, 20);
  const page = clampNumber(parseInt(query.page, 10), 1, 1000, 1);
  const offset = (page - 1) * limit;
  return { filters, pagination: { limit, offset } };
}

async function listSafetyReports(req, res) {
  const { filters, pagination } = normalizeSafetyFilters(req.query || {});
  const result = await reportService.getSafetyReports({ filters, pagination });
  res.json({
    data: result.items,
    meta: {
      total: result.total,
      limit: result.limit,
      offset: result.offset,
      filters,
      generatedAt: new Date().toISOString()
    }
  });
}

async function createSafetyReport(req, res) {
  const errors = validateSafetyReportPayload(req.body);
  if (errors.length) {
    throw buildValidationError(errors);
  }
  const report = await reportService.createSafetyReport(req.body);
  res.status(201).json({ data: report });
}

async function voteSafetyReport(req, res) {
  const { id } = req.params;
  const { delta } = req.body || {};
  if (!id || typeof delta === 'undefined') {
    throw buildValidationError(['delta']);
  }
  const updated = await reportService.voteSafetyReport(id, Number(delta));
  if (!updated) {
    return res.status(404).json({ message: 'Reporte no encontrado.' });
  }
  res.json({ data: updated });
}

module.exports = {
  listSafetyReports,
  createSafetyReport,
  voteSafetyReport
};
