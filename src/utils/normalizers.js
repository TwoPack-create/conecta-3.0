const {
  PUBLIC_TRANSPORT_MODES,
  DEFAULT_PUBLIC_TRIP_LIMIT,
  MAX_PUBLIC_TRIP_LIMIT,
  VEHICLE_TYPES,
  DEFAULT_VEHICLE_TRIP_LIMIT,
  MAX_VEHICLE_TRIP_LIMIT
} = require('../constants/transport');

const TODAY_ISO = () => new Date().toISOString().split('T')[0];

function sanitizeText(value) {
  return typeof value === 'string' ? value.trim() : '';
}

function normalizeMode(value) {
  const text = sanitizeText(value);
  if (!text) return null;

  return PUBLIC_TRANSPORT_MODES.find(
    mode => mode.toLowerCase() === text.toLowerCase()
  ) || null;
}

function normalizeVehicleType(value) {
  const text = sanitizeText(value);
  if (!text) return null;

  return VEHICLE_TYPES.find(
    type => type.toLowerCase() === text.toLowerCase()
  ) || text;
}

function normalizeDate(value, { fallbackToday = true } = {}) {
  if (!value) {
    return fallbackToday ? TODAY_ISO() : null;
  }
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) {
    return fallbackToday ? TODAY_ISO() : null;
  }
  return parsed.toISOString().split('T')[0];
}

function normalizeTime(value) {
  if (typeof value === 'string') {
    const match = value.match(/^([01]\d|2[0-3]):([0-5]\d)$/);
    if (match) {
      return `${match[1]}:${match[2]}`;
    }
  }
  const now = new Date();
  return `${now.getHours().toString().padStart(2, '0')}:${now
    .getMinutes()
    .toString()
    .padStart(2, '0')}`;
}

function clampNumber(value, min, max, fallback) {
  const numeric = Number(value);
  if (Number.isNaN(numeric)) {
    return fallback;
  }
  return Math.min(Math.max(numeric, min), max);
}

function normalizePublicTripPayload(payload = {}) {
  const mode = normalizeMode(payload.mode) || 'Metro';
  const date = normalizeDate(payload.date);
  const time = normalizeTime(payload.time);

  return {
    creator: sanitizeText(payload.creator) || 'Usuario Demo',
    mode,
    line: sanitizeText(payload.line),
    station: sanitizeText(payload.station),
    direction: sanitizeText(payload.direction),
    origin: sanitizeText(payload.origin),
    destination: sanitizeText(payload.destination),
    time,
    date,
    meetingPoint: sanitizeText(payload.meetingPoint),
    description: sanitizeText(payload.description),
    spots: clampNumber(payload.spots, 1, 20, 1)
  };
}

function normalizePublicTripFilters(query = {}) {
  const filters = {};
  const mode = normalizeMode(query.mode);
  if (mode) {
    filters.mode = mode;
  }

  const date = normalizeDate(query.date, { fallbackToday: false });
  if (date) {
    filters.date = date;
  }

  const from = normalizeDate(query.from || query.dateFrom, { fallbackToday: false });
  if (from) {
    filters.dateFrom = from;
  }

  const to = normalizeDate(query.to || query.dateTo, { fallbackToday: false });
  if (to) {
    filters.dateTo = to;
  }

  const limit = clampNumber(
    parseInt(query.limit, 10),
    1,
    MAX_PUBLIC_TRIP_LIMIT,
    DEFAULT_PUBLIC_TRIP_LIMIT
  );
  const page = clampNumber(parseInt(query.page, 10), 1, 1000, 1);
  const offset = (page - 1) * limit;

  return {
    filters,
    pagination: { limit, offset },
    metaFilters: {
      mode: filters.mode || null,
      date: filters.date || null,
      from,
      to
    }
  };
}

function normalizeVehicleTripPayload(payload = {}) {
  const type = normalizeVehicleType(payload.vehicle_type) || 'Automóvil';
  const date = normalizeDate(payload.date);
  const departure = normalizeTime(payload.departure_time);

  return {
    driver: sanitizeText(payload.driver) || 'Usuario Demo',
    vehicle_type: type,
    vehicle_model: sanitizeText(payload.vehicle_model),
    color: sanitizeText(payload.color),
    plate: sanitizeText(payload.plate),
    origin: sanitizeText(payload.origin),
    destination: sanitizeText(payload.destination),
    departure_time: departure,
    arrival_time: sanitizeText(payload.arrival_time),
    seats_available: clampNumber(payload.seats_available, 1, 8, 1),
    donation: clampNumber(payload.donation, 0, 50000, 0),
    route: sanitizeText(payload.route),
    day: date,
    date,
    meetingPoint: sanitizeText(payload.meetingPoint),
    description: sanitizeText(payload.description),
    routeGeoJSON: payload.routeGeoJSON || null,
    routeStart: payload.routeStart || null,
    routeEnd: payload.routeEnd || null,
    routeDistance: payload.routeDistance || null,
    routeDuration: payload.routeDuration || null
  };
}

function normalizeVehicleTripFilters(query = {}) {
  const filters = {};
  const vehicleType = normalizeVehicleType(query.type);
  if (vehicleType) {
    filters.vehicle_type = vehicleType;
  }

  const date = normalizeDate(query.date, { fallbackToday: false });
  if (date) {
    filters.date = date;
  }

  const seatsMin = clampNumber(parseInt(query.seatsMin, 10), 1, 8, null);
  if (seatsMin) {
    filters.seatsMin = seatsMin;
  }

  const donationMax = clampNumber(parseInt(query.donationMax, 10), 0, 50000, null);
  if (donationMax !== null) {
    filters.donationMax = donationMax;
  }

  const limit = clampNumber(
    parseInt(query.limit, 10),
    1,
    MAX_VEHICLE_TRIP_LIMIT,
    DEFAULT_VEHICLE_TRIP_LIMIT
  );
  const page = clampNumber(parseInt(query.page, 10), 1, 1000, 1);
  const offset = (page - 1) * limit;

  return {
    filters,
    pagination: { limit, offset },
    metaFilters: {
      type: filters.vehicle_type || null,
      date: filters.date || null,
      seatsMin: filters.seatsMin || null,
      donationMax: filters.donationMax ?? null
    }
  };
}

function normalizeUserTripPayload(payload = {}) {
  const date = normalizeDate(payload.date);
  const time = normalizeTime(payload.time);
  return {
    id: sanitizeText(payload.id),
    tripType: sanitizeText(payload.tripType) || 'public',
    referenceId: sanitizeText(payload.referenceId),
    title: sanitizeText(payload.title),
    origin: sanitizeText(payload.origin),
    destination: sanitizeText(payload.destination),
    date,
    time,
    status: sanitizeText(payload.status) || 'Confirmado',
    statusClass: sanitizeText(payload.statusClass) || 'status--info',
    organizer: sanitizeText(payload.organizer),
    organizerLabel: sanitizeText(payload.organizerLabel),
    organizerRating: payload.organizerRating || null,
    organizerTrips: payload.organizerTrips || null,
    isHost: Boolean(payload.isHost),
    hasStarted: Boolean(payload.hasStarted),
    pickupPoint: payload.pickupPoint || null,
    tripTypeLabel: sanitizeText(payload.tripTypeLabel),
    tripDescription: sanitizeText(payload.tripDescription),
    meetingPoint: sanitizeText(payload.meetingPoint),
    description: sanitizeText(payload.description),
    startTime: payload.startTime || null,
    routeGeoJSON: payload.routeGeoJSON || null,
    routeStart: payload.routeStart || null,
    routeEnd: payload.routeEnd || null,
    routeDistance: payload.routeDistance || null,
    routeDuration: payload.routeDuration || null,
    vehicle_type: sanitizeText(payload.vehicle_type),
    participantsTemplate: Array.isArray(payload.participantsTemplate) ? payload.participantsTemplate : null,
    createdAt: payload.createdAt || new Date().toISOString()
  };
}

module.exports = {
  sanitizeText,
  normalizeMode,
  normalizeVehicleType,
  normalizeDate,
  normalizeTime,
  clampNumber,
  normalizePublicTripPayload,
  normalizePublicTripFilters,
  normalizeVehicleTripPayload,
  normalizeVehicleTripFilters,
  normalizeUserTripPayload
};
