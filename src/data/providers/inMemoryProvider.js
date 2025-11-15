const { nanoid } = require('nanoid');
const seedData = require('../seedData');
const {
  DEFAULT_PUBLIC_TRIP_LIMIT,
  MAX_PUBLIC_TRIP_LIMIT,
  DEFAULT_VEHICLE_TRIP_LIMIT,
  MAX_VEHICLE_TRIP_LIMIT
} = require('../../constants/transport');

const deepClone = data => JSON.parse(JSON.stringify(data));

class InMemoryProvider {
  constructor(seed = seedData) {
    this.reset(seed);
  }

  reset(seed = seedData) {
    this.users = deepClone(seed.users || []);
    this.publicTransportTrips = deepClone(seed.publicTransportTrips || []);
    this.vehicleTrips = deepClone(seed.vehicleTrips || []);
    this.safetyReports = deepClone(seed.safetyReports || []);
    this.chatThreads = deepClone(seed.chatThreads || {});
    this.userTrips = deepClone(seed.userTrips || { active: [], completed: [] });
    this.panicAlerts = deepClone(seed.panicAlerts || []);
    this.registrations = deepClone(seed.registrations || []);
  }

  async getUsers() {
    return deepClone(this.users);
  }

  async listPublicTrips(options = {}) {
    const filters = options.filters || {};
    const pagination = options.pagination || {};
    const requestedLimit = Number(pagination.limit);
    const limit = Number.isInteger(requestedLimit)
      ? Math.min(Math.max(requestedLimit, 1), MAX_PUBLIC_TRIP_LIMIT)
      : DEFAULT_PUBLIC_TRIP_LIMIT;
    const offset = Math.max(0, Number(pagination.offset) || 0);

    const filtered = this.publicTransportTrips
      .filter(trip => {
        if (filters.mode && (trip.mode || '').toLowerCase() !== filters.mode.toLowerCase()) {
          return false;
        }
        if (filters.date && (trip.date || trip.day) !== filters.date) {
          return false;
        }
        if (filters.dateFrom && (trip.date || trip.day) < filters.dateFrom) {
          return false;
        }
        if (filters.dateTo && (trip.date || trip.day) > filters.dateTo) {
          return false;
        }
        return true;
      })
      .sort((a, b) => {
        const dateA = `${a.date || a.day || ''}T${a.time || '00:00'}`;
        const dateB = `${b.date || b.day || ''}T${b.time || '00:00'}`;
        return dateB.localeCompare(dateA);
      });

    const items = filtered.slice(offset, offset + limit);
    return {
      items: deepClone(items),
      total: filtered.length,
      limit,
      offset
    };
  }

  async createPublicTrip(payload = {}) {
    const {
      creator = 'Usuario Demo',
      mode,
      line = '',
      station = '',
      direction = '',
      origin,
      destination,
      time,
      spots,
      date,
      meetingPoint = '',
      description = ''
    } = payload;

    const tripDate = date || new Date().toISOString().split('T')[0];
    const safeSpots = Math.max(1, Number(spots) || 1);
    const meetingValue = meetingPoint || '';

    const newTrip = {
      id: nanoid(),
      creator,
      mode,
      line,
      station,
      direction,
      origin,
      destination,
      time,
      spots: safeSpots,
      date: tripDate,
      meetingPoint: meetingValue,
      meeting_point: meetingValue,
      description,
      created_at: new Date().toISOString()
    };

    this.publicTransportTrips.unshift(newTrip);
    return deepClone(newTrip);
  }

  async listVehicleTrips(options = {}) {
    const filters = options.filters || {};
    const pagination = options.pagination || {};
    const requestedLimit = Number(pagination.limit);
    const limit = Number.isInteger(requestedLimit)
      ? Math.min(Math.max(requestedLimit, 1), MAX_VEHICLE_TRIP_LIMIT)
      : DEFAULT_VEHICLE_TRIP_LIMIT;
    const offset = Math.max(0, Number(pagination.offset) || 0);

    const filtered = this.vehicleTrips
      .filter(trip => {
        if (filters.vehicle_type && (trip.vehicle_type || '').toLowerCase() !== filters.vehicle_type.toLowerCase()) {
          return false;
        }
        if (filters.date && (trip.date || trip.day) !== filters.date) {
          return false;
        }
        if (typeof filters.seatsMin === 'number' && Number(trip.seats_available || 0) < filters.seatsMin) {
          return false;
        }
        if (typeof filters.donationMax === 'number' && Number(trip.donation || 0) > filters.donationMax) {
          return false;
        }
        return true;
      })
      .sort((a, b) => {
        const dateA = `${a.date || a.day || ''}T${a.departure_time || '00:00'}`;
        const dateB = `${b.date || b.day || ''}T${b.departure_time || '00:00'}`;
        return dateB.localeCompare(dateA);
      });

    const items = filtered.slice(offset, offset + limit);
    return {
      items: deepClone(items),
      total: filtered.length,
      limit,
      offset
    };
  }

  async createVehicleTrip(payload = {}) {
    const {
      driver = 'Usuario Demo',
      vehicle_type,
      vehicle_model = '',
      color = '',
      plate = '',
      origin,
      destination,
      departure_time,
      arrival_time = '',
      seats_available,
      donation = 0,
      route = '',
      day = '',
      date = '',
      routeGeoJSON = null,
      routeStart = null,
      routeEnd = null,
      routeDistance = null,
      routeDuration = null,
      meetingPoint = '',
      description = ''
    } = payload;

    const travelDay = day || date || new Date().toISOString().split('T')[0];
    const meetingValue = meetingPoint || '';

    const newVehicleTrip = {
      id: nanoid(),
      driver,
      vehicle_type,
      vehicle_model,
      color,
      plate,
      origin,
      destination,
      departure_time,
      arrival_time,
      seats_available: Number(seats_available),
      donation: Number(donation) || 0,
      route,
      day: travelDay,
      date: travelDay,
      driver_rating: 4.5,
      meetingPoint: meetingValue,
      routeGeoJSON,
      routeStart,
      routeEnd,
      routeDistance,
      routeDuration,
      description,
      created_at: new Date().toISOString()
    };

    this.vehicleTrips.unshift(newVehicleTrip);
    return deepClone(newVehicleTrip);
  }

  async listSafetyReports(options = {}) {
    const filters = options.filters || {};
    const pagination = options.pagination || {};
    const limit = Number.isInteger(pagination.limit) ? pagination.limit : this.safetyReports.length;
    const offset = Math.max(0, Number(pagination.offset) || 0);

    const filtered = this.safetyReports.filter(report => {
      if (filters.type && (report.type || '').toLowerCase() !== filters.type.toLowerCase()) {
        return false;
      }
      if (filters.severity && (report.severity || '').toLowerCase() !== filters.severity.toLowerCase()) {
        return false;
      }
      return true;
    });

    const items = filtered.slice(offset, offset + limit);
    return {
      items: deepClone(items),
      total: filtered.length,
      limit,
      offset
    };
  }

  async createSafetyReport(payload = {}) {
    const {
      type,
      location,
      time = '',
      description,
      severity = 'low',
      anonymous = false
    } = payload;

    const newReport = {
      id: nanoid(),
      type,
      location,
      time,
      description,
      severity,
      date: new Date().toISOString().split('T')[0],
      anonymous: Boolean(anonymous),
      votes: 0
    };

    this.safetyReports.unshift(newReport);
    return deepClone(newReport);
  }

  async voteSafetyReport(reportId, delta = 0) {
    const index = this.safetyReports.findIndex(report => String(report.id) === String(reportId));
    if (index === -1) return null;
    const updatedVotes = (this.safetyReports[index].votes || 0) + Number(delta || 0);
    this.safetyReports[index].votes = updatedVotes;
    return deepClone(this.safetyReports[index]);
  }

  async getChatMessages(tripId) {
    if (!tripId) return [];
    const messages = this.chatThreads[tripId] || [];
    return deepClone(messages.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp)));
  }

  async createChatMessage(tripId, payload = {}) {
    if (!tripId) throw new Error('TripId requerido para el chat.');
    const message = {
      id: nanoid(),
      tripId,
      senderId: payload.senderId || 'guest',
      senderName: payload.senderName || 'Usuario',
      text: payload.text || '',
      avatar: payload.avatar || '',
      mine: Boolean(payload.mine),
      timestamp: payload.timestamp || new Date().toISOString()
    };
    if (!this.chatThreads[tripId]) {
      this.chatThreads[tripId] = [];
    }
    this.chatThreads[tripId].push(message);
    return deepClone(message);
  }

  async getStatusCounts() {
    return {
      users: this.users.length,
      publicTransportTrips: this.publicTransportTrips.length,
      vehicleTrips: this.vehicleTrips.length,
      safetyReports: this.safetyReports.length
    };
  }

  async getUserTrips() {
    return deepClone(this.userTrips);
  }

  async createUserTrip(payload = {}) {
    const entry = {
      id: payload.id || nanoid(),
      ...payload,
      createdAt: payload.createdAt || new Date().toISOString()
    };

    const exists = [...this.userTrips.active, ...this.userTrips.completed]
      .find(item =>
        (item.id && item.id === entry.id) ||
        (entry.referenceId && item.referenceId === entry.referenceId && item.tripType === entry.tripType)
      );
    if (exists) {
      return deepClone(exists);
    }

    this.userTrips.active.unshift(entry);
    return deepClone(entry);
  }

  async updateUserTrip(id, updates = {}) {
    if (!id) return null;
    const applyUpdates = list => {
      const idx = list.findIndex(item => item.id === id);
      if (idx === -1) return null;
      list[idx] = { ...list[idx], ...updates };
      return list[idx];
    };

    let entry = applyUpdates(this.userTrips.active);
    if (!entry) {
      entry = applyUpdates(this.userTrips.completed);
    }

    if (!entry) {
      return null;
    }

    const isCompleted = (entry.status || '').toLowerCase().includes('complet');
    if (isCompleted) {
      this.userTrips.active = this.userTrips.active.filter(item => item.id !== entry.id);
      const existingCompleted = this.userTrips.completed.find(item => item.id === entry.id);
      if (!existingCompleted) {
        this.userTrips.completed.unshift(entry);
      }
    } else {
      this.userTrips.completed = this.userTrips.completed.filter(item => item.id !== entry.id);
      const existsActive = this.userTrips.active.find(item => item.id === entry.id);
      if (!existsActive) {
        this.userTrips.active.unshift(entry);
      }
    }

    return deepClone(entry);
  }

  async listPanicAlerts(options = {}) {
    const limit = Math.max(1, Math.min(Number(options.limit) || 10, 50));
    const items = (this.panicAlerts || [])
      .slice()
      .sort((a, b) => {
        const aTs = new Date(a.triggeredAt || a.createdAt || 0).getTime();
        const bTs = new Date(b.triggeredAt || b.createdAt || 0).getTime();
        return bTs - aTs;
      })
      .slice(0, limit);

    return {
      items: deepClone(items),
      total: this.panicAlerts.length,
      limit
    };
  }

  async createPanicAlert(payload = {}) {
    const alert = {
      id: nanoid(),
      triggeredBy: payload.triggeredBy || 'Usuario desconocido',
      triggeredAt: payload.triggeredAt || new Date().toISOString(),
      countdown: Number(payload.countdown) || 5,
      recipients: Array.isArray(payload.recipients) && payload.recipients.length
        ? payload.recipients
        : ['community'],
      location: payload.location || null,
      status: payload.status || 'active',
      notes: payload.notes || '',
      config: payload.config || {},
      deliveredTo: payload.deliveredTo || [],
      acknowledgedAt: payload.acknowledgedAt || null
    };

    this.panicAlerts.unshift(alert);
    return deepClone(alert);
  }

  async getUserProfile() {
    if (!this.users.length) return null;
    return deepClone(this.users[0]);
  }

  async updateUserProfile(updates = {}) {
    if (!this.users.length) return null;
    const current = this.users[0];
    const nextProfile = {
      ...current,
      ...updates,
      profileUpdatedAt: updates.profileUpdatedAt || new Date().toISOString()
    };
    this.users[0] = nextProfile;
    return deepClone(nextProfile);
  }

  async createRegistration(payload = {}) {
    const email = String(payload.email || '').trim().toLowerCase();
    const serverCode = payload.serverCode || String(Math.floor(100000 + Math.random() * 900000));
    const providedCode = String(payload.verificationCode || '').trim();
    const status = providedCode && providedCode === serverCode
      ? 'verified'
      : 'pending_verification';

    const registration = {
      id: nanoid(),
      method: payload.method || 'codigo',
      email,
      displayName: payload.displayName || '',
      status,
      verificationCode: serverCode,
      createdAt: new Date().toISOString(),
      campus: payload.campus || 'FCFM',
      metadata: payload.metadata || {}
    };

    this.registrations.unshift(registration);
    return deepClone(registration);
  }
}

module.exports = new InMemoryProvider();
