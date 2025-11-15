const profileService = require('../services/profileService');
const {
  validateUserProfilePayload,
  buildValidationError
} = require('../utils/validators');

async function getProfile(_req, res) {
  const profile = await profileService.getProfile();
  res.json({ data: profile });
}

async function updateProfile(req, res) {
  const payload = req.body || {};
  const errors = validateUserProfilePayload(payload);
  if (errors.length) {
    throw buildValidationError(errors);
  }
  const updated = await profileService.updateProfile(payload);
  res.json({ data: updated });
}

module.exports = {
  getProfile,
  updateProfile
};
