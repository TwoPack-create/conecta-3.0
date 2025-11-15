const registrationService = require('../services/registrationService');
const {
  validateRegistrationPayload,
  buildValidationError
} = require('../utils/validators');

function sanitizeRegistration(record) {
  if (!record) return null;
  const { verificationCode, ...rest } = record;
  return {
    ...rest,
    debugCode: verificationCode
  };
}

async function createRegistration(req, res) {
  const payload = req.body || {};
  const errors = validateRegistrationPayload(payload);
  if (errors.length) {
    throw buildValidationError(errors);
  }
  const created = await registrationService.createRegistration(payload);
  const sanitized = sanitizeRegistration(created);
  const statusCode = sanitized.status === 'verified' ? 200 : 202;
  res.status(statusCode).json({
    data: sanitized,
    meta: {
      nextSteps: sanitized.status === 'verified'
        ? 'Cuenta verificada para pruebas internas.'
        : 'Ingresa el código enviado a tu correo institucional.',
      debugCode: sanitized.debugCode
    }
  });
}

module.exports = {
  createRegistration
};
