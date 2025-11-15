const { PUBLIC_TRANSPORT_MODES } = require('../constants/transport');

const TIME_REGEX = /^([01]\d|2[0-3]):([0-5]\d)$/;
const ALLOWED_REGISTRATION_DOMAINS = [
  'ug.uchile.cl',
  'ing.uchile.cl',
  'uchile.cl',
  'idiem.cl',
  'fcfm.uchile.cl'
];
const REGISTRATION_METHODS = ['codigo', 'enlace'];

function isValidTime(value) {
  return typeof value === 'string' && TIME_REGEX.test(value);
}

function validatePublicTripPayload(payload = {}) {
  const errors = [];

  if (!payload.mode || !PUBLIC_TRANSPORT_MODES.includes(payload.mode)) {
    errors.push('mode');
  }
  if (!payload.origin) errors.push('origin');
  if (!payload.destination) errors.push('destination');
  if (!isValidTime(payload.time)) errors.push('time');

  const spots = Number(payload.spots);
  if (!Number.isInteger(spots) || spots <= 0) errors.push('spots');

  return errors;
}

function validateVehicleTripPayload(payload = {}) {
  const errors = [];
  if (!payload.vehicle_type) errors.push('vehicle_type');
  if (!payload.origin) errors.push('origin');
  if (!payload.destination) errors.push('destination');
  if (!isValidTime(payload.departure_time)) errors.push('departure_time');
  const seats = Number(payload.seats_available);
  if (!Number.isInteger(seats) || seats <= 0) errors.push('seats_available');
  return errors;
}

function validateSafetyReportPayload(payload = {}) {
  const errors = [];
  if (!payload.type) errors.push('type');
  if (!payload.location) errors.push('location');
  if (!payload.description) errors.push('description');
  return errors;
}

function validateUserTripPayload(payload = {}) {
  const errors = [];
  if (!payload.tripType) errors.push('tripType');
  if (!payload.referenceId) errors.push('referenceId');
  if (!payload.title) errors.push('title');
  if (!payload.origin) errors.push('origin');
  if (!payload.destination) errors.push('destination');
  if (!payload.date) errors.push('date');
  if (!isValidTime(payload.time)) errors.push('time');
  return errors;
}

function validateUserTripUpdate(payload = {}) {
  const errors = [];
  if (!payload || Object.keys(payload).length === 0) {
    errors.push('body');
  }
  if (payload.time && !isValidTime(payload.time)) {
    errors.push('time');
  }
  if (payload.hostRating !== undefined) {
    const rating = Number(payload.hostRating);
    if (Number.isNaN(rating) || rating < 1 || rating > 5) {
      errors.push('hostRating');
    }
  }
  if (payload.donationAmount !== undefined) {
    const donation = Number(payload.donationAmount);
    if (Number.isNaN(donation) || donation < 0) {
      errors.push('donationAmount');
    }
  }
  if (payload.participantRatings !== undefined) {
    if (!Array.isArray(payload.participantRatings)) {
      errors.push('participantRatings');
    } else {
      const invalid = payload.participantRatings.some(entry => (
        !entry ||
        typeof entry.participantId === 'undefined' ||
        Number.isNaN(Number(entry.rating)) ||
        Number(entry.rating) < 1 ||
        Number(entry.rating) > 5
      ));
      if (invalid) {
        errors.push('participantRatings');
      }
    }
  }
  return errors;
}

function validatePanicAlertPayload(payload = {}) {
  const errors = [];
  if (!payload.triggeredBy) errors.push('triggeredBy');
  if (!Array.isArray(payload.recipients) || !payload.recipients.length) {
    errors.push('recipients');
  }
  if (payload.location) {
    if (
      typeof payload.location.lat !== 'number' ||
      typeof payload.location.lng !== 'number'
    ) {
      errors.push('location');
    }
  }
  return errors;
}

function validateUserProfilePayload(payload = {}) {
  const errors = [];
  if (payload.phone) {
    const digits = String(payload.phone).replace(/\D/g, '');
    if (digits.length < 8) {
      errors.push('phone');
    }
  }
  const maxLongField = 500;
  if (payload.description && payload.description.length > maxLongField) {
    errors.push('description');
  }
  if (payload.emergency_contacts && payload.emergency_contacts.length > maxLongField) {
    errors.push('emergency_contacts');
  }
  if (payload.bank_details && payload.bank_details.length > 200) {
    errors.push('bank_details');
  }
  if (payload.photo && typeof payload.photo !== 'string') {
    errors.push('photo');
  }
  return errors;
}

function validateRegistrationPayload(payload = {}) {
  const errors = [];
  const email = String(payload.email || '').trim().toLowerCase();
  if (!email.includes('@')) {
    errors.push('email');
  } else {
    const domain = email.split('@')[1];
    if (!ALLOWED_REGISTRATION_DOMAINS.includes(domain)) {
      errors.push('email');
    }
  }

  if (!payload.displayName || String(payload.displayName).trim().length < 3) {
    errors.push('displayName');
  }

  const password = String(payload.password || '');
  if (password.length < 8) {
    errors.push('password');
  }

  if (!REGISTRATION_METHODS.includes(payload.method)) {
    errors.push('method');
  }

  if (payload.verificationCode) {
    const code = String(payload.verificationCode).trim();
    if (code.length !== 6) {
      errors.push('verificationCode');
    }
  }

  return errors;
}

function buildValidationError(fields = []) {
  const error = new Error('Datos incompletos o invǭlidos.');
  error.status = 400;
  error.details = fields;
  return error;
}

module.exports = {
  validatePublicTripPayload,
  validateVehicleTripPayload,
  validateSafetyReportPayload,
  validateUserTripPayload,
  validateUserTripUpdate,
  validatePanicAlertPayload,
  validateUserProfilePayload,
  validateRegistrationPayload,
  buildValidationError
};
