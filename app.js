// Conecta FCFM - Main JavaScript File

// App Data
const appData = {
  users: [
    {
      id: 1,
      name: "María González",
      email: "mgonzalez@ing.uchile.cl",
      rating: 4.8,
      verified: true,
      photo: "https://ui-avatars.com/api/?name=Maria+Gonzalez&background=16a34a&color=fff",
      trips_completed: 45,
      trips_created: 12,
      phone: "+56 9 1111 2222",
      emergency_contacts: "Carlos R. (+56 9 3333 4444)\nSofía L. (+56 9 5555 6666)",
      description: "Estudiante FCFM, fan del transporte compartido.",
      bank_details: "BancoEstado · CuentaVista 12345678"
    },
    {
      id: 2,
      name: "Carlos Rodríguez",
      email: "crodriguez@fcfm.uchile.cl",
      rating: 4.9,
      verified: true,
      photo: "avatar2.jpg",
      trips_completed: 67
    },
    {
      id: 3,
      name: "Ana Martínez",
      email: "amartinez@ing.uchile.cl",
      rating: 4.7,
      verified: true,
      photo: "avatar3.jpg",
      trips_completed: 23
    }
  ],
  publicTransportTrips: [
    {
      id: 1,
      creator: "María González",
      mode: "Metro",
      line: "Línea 4",
      station: "Universidad de Chile",
      direction: "Puente Alto",
      origin: "Metro U. de Chile",
      destination: "FCFM Beauchef",
      time: "14:30",
      spots: 3,
      date: "2024-09-13",
      host_rating: 4.9,
      host_trips: 67,
      meetingPoint: "Entrada principal Metro U. de Chile",
      description: "Ruta directa hacia Beauchef con coordinación previa.",
      participantsTemplate: [
        { id: "p_carlos", name: "Carlos Rodríguez", rating: 4.7, trips: 32 },
        { id: "p_sofia", name: "Sofía López", rating: 4.9, trips: 18 }
      ]
    },
    {
      id: 2,
      creator: "Carlos Rodríguez",
      mode: "Micro",
      line: "B16",
      station: "Paradero FCFM",
      direction: "Centro",
      origin: "FCFM",
      destination: "Metro Baquedano",
      time: "18:15",
      spots: 2,
      date: "2024-09-13",
      host_rating: 4.8,
      host_trips: 54,
      meetingPoint: "Paradero B16 frente a FCFM",
      description: "Pasamos por Alameda y dejamos en Metro Baquedano.",
      participantsTemplate: [
        { id: "p_maria", name: "María Torres", rating: 4.6, trips: 21 },
        { id: "p_antonio", name: "Antonio Vega", rating: 4.5, trips: 15 }
      ]
    }
  ],
  vehicleTrips: [
    {
      id: 1,
      driver: "Ana Martínez",
      vehicle_type: "Automóvil",
      origin: "Providencia",
      destination: "FCFM",
      departure_time: "08:00",
      seats_available: 2,
      donation: 1500,
      route: "Av. Providencia - Av. Vicuña Mackenna - Av. Beauchef",
      driver_rating: 4.7,
      driver_trips: 45,
      day: "2024-09-13",
      date: "2024-09-13",
      meetingPoint: "Metro Los Leones - salida norte",
      description: "Salgo temprano pasando por Vicuña Mackenna directo a Beauchef.",
      participantsTemplate: [
        { id: "p_camila", name: "Camila Díaz", rating: 4.8, trips: 36 },
        { id: "p_martin", name: "Martín Salinas", rating: 4.6, trips: 22 }
      ]
    },
    {
      id: 2,
      driver: "Carlos Rodríguez",
      vehicle_type: "Automóvil",
      origin: "FCFM",
      destination: "Maipú",
      departure_time: "16:45",
      seats_available: 3,
      donation: 2000,
      route: "Av. Beauchef - Alameda - Av. Pajaritos",
      driver_rating: 4.9,
      driver_trips: 67,
      day: "2024-09-13",
      date: "2024-09-13",
      meetingPoint: "Salida principal de Beauchef",
      description: "Viaje directo por Alameda, posibilidad de dejar en estaciones intermedias.",
      participantsTemplate: [
        { id: "p_luciana", name: "Luciana Araya", rating: 5.0, trips: 41 },
        { id: "p_matias", name: "Matías Pérez", rating: 4.5, trips: 29 }
      ]
    }
  ],
  safetyReports: [
    {
      id: 1,
      type: "unsafe_route",
      location: "Estación Universidad de Chile - Salida Norte",
      time: "22:30",
      description: "Zona poco iluminada, presencia de personas sospechosas",
      severity: "medium",
      date: "2024-09-12",
      votes: 12
    },
    {
      id: 2,
      type: "incident",
      location: "Paradero B16 frente a FCFM",
      time: "19:45",
      description: "Intento de robo a estudiante esperando micro",
      severity: "high",
      date: "2024-09-11",
      votes: -3
    }
  ],
  metroLines: [
    "Línea 1 - Roja",
    "Línea 2 - Amarilla",
    "Línea 3 - Café",
    "Línea 4 - Azul",
    "Línea 4A - Celeste",
    "Línea 5 - Verde",
    "Línea 6 - Morada"
  ],
  emergencyContacts: [
    { name: "Carolina Soto", phone: "+56 9 1234 5678" },
    { name: "Matías Pérez", phone: "+56 9 8765 4321" }
  ],
  recentActivity: [
    {
      id: "act_1",
      icon: "fas fa-subway",
      title: "María González creó un viaje Metro L4",
      description: "Metro U. de Chile → FCFM Beauchef",
      timestamp: new Date(Date.now() - 15 * 60 * 1000).toISOString()
    },
    {
      id: "act_2",
      icon: "fas fa-car",
      title: "Carlos Rodríguez ofrece viaje a Maipú",
      description: "FCFM → Metro Baquedano",
      timestamp: new Date(Date.now() - 32 * 60 * 1000).toISOString()
    },
    {
      id: "act_3",
      icon: "fas fa-shield-alt",
      title: "Reporte de riesgo medio",
      description: "Estación U. de Chile - Salida Norte",
      timestamp: new Date(Date.now() - 55 * 60 * 1000).toISOString()
    }
  ],
  panicAlerts: [],
  registrations: []
};

hydrateProfileFromStorage();

// Global variables
let currentSection = 'home';
let backendAvailable = true;
const API_BASE_URL = window.__API_BASE_URL__ || '/api';
const defaultSection = 'home';
const routeMap = {
  home: '/inicio',
  'transporte-publico': '/transporte-publico',
  vehiculo: '/vehiculo',
  'mis-viajes': '/mis-viajes',
  rutas: '/rutas',
  perfil: '/perfil',
  configuracion: '/configuracion',
  chat: '/chat'
};
const REGISTRATION_ALLOWED_DOMAINS = [
  'ug.uchile.cl',
  'ing.uchile.cl',
  'uchile.cl',
  'idiem.cl',
  'fcfm.uchile.cl'
];
const PUBLIC_TRIPS_PAGE_SIZE = 12;
const VEHICLE_TRIPS_PAGE_SIZE = 12;
const SAFETY_REPORTS_PAGE_SIZE = 20;
const pathToSectionMap = buildPathToSection(routeMap);
const SYNC_STATUS_COPY = {
  online: {
    label: 'Servidor en linea',
    helper: 'Datos sincronizados correctamente.'
  },
  offline: {
    label: 'Sin conexion con el servidor',
    helper: 'Mostrando datos temporales.'
  },
  syncing: {
    label: 'Sincronizando con el servidor...',
    helper: 'Preparando los datos iniciales.'
  }
};
const userTrips = {
  active: [],
  completed: []
};
const PANIC_COUNTDOWN_SECONDS = 5;
const FIFTEEN_MINUTES = 15 * 60 * 1000;
const TWO_HOURS = 2 * 60 * 60 * 1000;
const MAP_DEFAULT_CENTER = [-33.457, -70.665];
let vehicleFormMap = null;
let detailMap = null;
let vehicleFormRouteLayer = null;
let detailRouteLayer = null;
let detailPickupMarker = null;
let detailPickupListener = null;
let vehicleFormMarkers = { start: null, end: null };
let vehicleFormRouteData = null;
let pendingPickupPoint = null;
let currentDetailContext = null;
let panicTimerId = null;
let panicSecondsRemaining = PANIC_COUNTDOWN_SECONDS;
let panicAlertActive = false;
let panicAudioContext = null;
let rootDataLoading = false;
let lastBackendSync = null;
let lifecycleIntervalId = null;
let currentCompletedTrip = null;
let currentChatTrip = null;
let chatLoading = false;
let profileSyncState = { status: 'idle', updatedAt: null, error: null };
let panicHistoryOpen = false;
const chatMessagesCache = {};
const CHAT_POLLING_INTERVAL_MS = 15000;
let chatPollingIntervalId = null;
let chatSyncState = {
  status: 'idle',
  updatedAt: null,
  error: null
};
let publicTripsMeta = {
  total: (appData.publicTransportTrips || []).length,
  filters: { mode: null },
  generatedAt: new Date().toISOString()
};
let publicTripsFilters = { mode: '', page: 1 };
let publicTripsRequestId = 0;
let publicTripsLoading = false;
let vehicleTripsMeta = {
  total: (appData.vehicleTrips || []).length,
  filters: { type: null },
  generatedAt: new Date().toISOString()
};
let vehicleTripsFilters = { type: 'todos', page: 1 };
let vehicleTripsRequestId = 0;
let vehicleTripsLoading = false;
let safetyReportsMeta = {
  total: (appData.safetyReports || []).length,
  filters: { type: null, severity: null },
  generatedAt: new Date().toISOString()
};
let safetyReportsFilters = { type: 'todos', severity: 'todos', page: 1 };
let safetyReportsRequestId = 0;
let safetyReportsLoading = false;
let panicAlertsMeta = {
  total: (appData.panicAlerts || []).length,
  generatedAt: new Date().toISOString()
};
let panicAlertsLoading = false;
let panicLocationCache = null;
let panicLocationRequestedAt = null;
let userTripsLoaded = false;
let currentFeedbackTripId = null;
const REPORT_VOTE_STORAGE_KEY = 'conecta-route-votes';
const USER_PROFILE_STORAGE_KEY = 'conecta-profile';
const USER_PREFERENCES_STORAGE_KEY = 'conecta-settings';
const PROFILE_REQUIRED_FIELDS = {
  phone: 'Teléfono',
  emergency_contacts: 'Contactos de emergencia',
  description: 'Descripción',
  bank_details: 'Datos bancarios'
};
let userReportVotes = loadStoredReportVotes();
let userPreferences = loadUserPreferences();
applyUserPreferences({ skipUi: true });
const reportVoteInFlight = {};
const SAFETY_REPORT_TYPE_INFO = {
  unsafe_route: { label: 'Ruta insegura', icon: 'fas fa-triangle-exclamation' },
  incident: { label: 'Incidente', icon: 'fas fa-bolt' },
  safe_route: { label: 'Ruta segura', icon: 'fas fa-shield-halved' },
  default: { label: 'Reporte', icon: 'fas fa-shield-alt' }
};
const SEVERITY_INFO = {
  high: { label: 'Riesgo Alto', className: 'high', weight: 3 },
  medium: { label: 'Riesgo Medio', className: 'medium', weight: 2 },
  low: { label: 'Riesgo Bajo', className: 'low', weight: 1 }
};

function normalizeText(value = '') {
  return value
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function createAvatarFromName(name = 'Usuario') {
  const safeName = encodeURIComponent(name);
  return `https://ui-avatars.com/api/?name=${safeName}&background=0f172a&color=fff`;
}

function loadStoredReportVotes() {
  if (typeof window === 'undefined' || !window.localStorage) return {};
  try {
    const raw = window.localStorage.getItem(REPORT_VOTE_STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (error) {
    console.warn('No se pudo cargar votos guardados:', error);
    return {};
  }
}

function persistReportVotes() {
  if (typeof window === 'undefined' || !window.localStorage) return;
  try {
    window.localStorage.setItem(REPORT_VOTE_STORAGE_KEY, JSON.stringify(userReportVotes));
  } catch (error) {
    console.warn('No se pudo guardar votos:', error);
  }
}

function loadStoredProfileData() {
  if (typeof window === 'undefined' || !window.localStorage) return null;
  try {
    const raw = window.localStorage.getItem(USER_PROFILE_STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (error) {
    console.warn('No se pudo cargar el perfil guardado:', error);
    return null;
  }
}

function saveProfileToStorage(profile = {}) {
  if (typeof window === 'undefined' || !window.localStorage) return;
  try {
    const payload = {
      name: profile.name,
      email: profile.email,
      phone: profile.phone,
      emergency_contacts: profile.emergency_contacts,
      description: profile.description,
      bank_details: profile.bank_details,
      photo: profile.photo,
      profileUpdatedAt: profile.profileUpdatedAt
    };
    window.localStorage.setItem(USER_PROFILE_STORAGE_KEY, JSON.stringify(payload));
  } catch (error) {
    console.warn('No se pudo guardar el perfil:', error);
  }
}

function hydrateProfileFromStorage() {
  if (!appData.users || !appData.users.length) return;
  const stored = loadStoredProfileData();
  if (stored) {
    appData.users[0] = { ...appData.users[0], ...stored };
  }
  if (!appData.users[0].profileUpdatedAt) {
    appData.users[0].profileUpdatedAt = new Date().toISOString();
  }
  syncEmergencyContactsFromUser(appData.users[0]);
}

function syncEmergencyContactsFromUser(user) {
  if (!user) return;
  const parsed = parseEmergencyContacts(user.emergency_contacts || '');
  appData.emergencyContacts = parsed.length ? parsed : [];
}

function parseEmergencyContacts(raw = '') {
  if (!raw) return [];
  return raw
    .split(/\n|;/)
    .map(entry => entry.trim())
    .filter(Boolean)
    .map((entry) => {
      const match = entry.match(/(.+?)\s*\((.+)\)/);
      if (match) {
        return { name: match[1].trim(), phone: match[2].trim() };
      }
      return { name: entry, phone: '' };
    });
}

function loadUserPreferences() {
  const defaults = {
    theme: 'light',
    language: 'es',
    panic: {
      sound: true,
      recipients: {
        carabineros: true,
        guardiaMunicipal: true,
        guardiaCivil: false,
        contacts: true,
        community: true
      }
    }
  };
  if (typeof window === 'undefined' || !window.localStorage) {
    return defaults;
  }
  try {
    const raw = window.localStorage.getItem(USER_PREFERENCES_STORAGE_KEY);
    const stored = raw ? JSON.parse(raw) : {};
    const merged = {
      ...defaults,
      ...stored,
      panic: {
        ...defaults.panic,
        ...(stored?.panic || {}),
        recipients: {
          ...defaults.panic.recipients,
          ...(stored?.panic?.recipients || {})
        }
      }
    };
    if (!stored?.theme) {
      const legacyTheme = window.localStorage.getItem('theme');
      if (legacyTheme) {
        merged.theme = legacyTheme;
      }
    }
    return merged;
  } catch (error) {
    console.warn('No se pudieron cargar las preferencias:', error);
    return defaults;
  }
}

function persistUserPreferences() {
  if (typeof window === 'undefined' || !window.localStorage) return;
  try {
    window.localStorage.setItem(USER_PREFERENCES_STORAGE_KEY, JSON.stringify(userPreferences));
    window.localStorage.setItem('theme', userPreferences.theme || 'light');
  } catch (error) {
    console.warn('No se pudieron guardar las preferencias:', error);
  }
}

function applyUserPreferences(options = {}) {
  const theme = userPreferences.theme || 'light';
  const language = userPreferences.language || 'es';
  document.documentElement.setAttribute('data-color-scheme', theme);
  document.documentElement.setAttribute('lang', language);
  if (options.skipUi) return;
  updatePanicContacts();
  renderSettingsPanel();
  renderPanicAlertCard();
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded, initializing app...');
  initializeApp();
});

window.addEventListener('popstate', handlePopState);

async function initializeApp() {
  try {
    initializeNavigation();
    initializeStatusControls();
    initializeDarkMode();
    initializeForms();
    initializeStarRating();
    initializeFilters();
    populateMetroLines();
    initializeChatEvents();
    renderInitialData();
    applyUserPreferences();
    handleInitialRoute();
    await loadInitialData();
    startTripLifecycleWatcher();
    initializeMaps();
    initializeDetailEvents();
    console.log('App initialized successfully');
  } catch (error) {
    console.error('Error initializing app:', error);
  }
}

function initializeChatEvents() {
  const chatBackBtn = document.getElementById('chatBackBtn');
  if (chatBackBtn) {
    chatBackBtn.addEventListener('click', function(e) {
      e.preventDefault();
      navigateToSection('mis-viajes');
    });
  }

  const chatMessageForm = document.getElementById('chatMessageForm');
  if (chatMessageForm) {
    chatMessageForm.addEventListener('submit', function(e) {
      e.preventDefault();
      handleChatMessageSubmit();
    });
  }

  const chatRefreshBtn = document.getElementById('chatRefreshBtn');
  if (chatRefreshBtn) {
    chatRefreshBtn.addEventListener('click', function(e) {
      e.preventDefault();
      refreshChatMessages();
    });
  }

  renderChatStatus();
}

function initializeMaps() {
  if (!window.L) {
    console.warn('Leaflet no disponible');
    return;
  }

  if (!vehicleFormMap) {
    vehicleFormMap = L.map('vehicleFormMap', { zoomControl: false }).setView(MAP_DEFAULT_CENTER, 13);
    addBaseTileLayer(vehicleFormMap);
    markMapReady('vehicleFormMap');
  }

  if (!detailMap) {
    detailMap = L.map('tripDetailMap', { zoomControl: true }).setView(MAP_DEFAULT_CENTER, 13);
    addBaseTileLayer(detailMap);
    markMapReady('tripDetailMap');
  }
}

function addBaseTileLayer(mapInstance) {
  if (!mapInstance) return;
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap',
    maxZoom: 19
  }).addTo(mapInstance);
}

async function geocodeAddress(query) {
  if (!query) throw new Error('Dirección vacía');
  const url = `https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${encodeURIComponent(query)}`;
  const response = await fetch(url, {
    headers: {
      'Accept': 'application/json',
      'User-Agent': 'Conecta FCFM Demo'
    }
  });
  const data = await response.json();
  if (!data || !data.length) {
    throw new Error(`No se encontró la dirección: ${query}`);
  }
  return {
    lat: parseFloat(data[0].lat),
    lng: parseFloat(data[0].lon),
    displayName: data[0].display_name
  };
}

async function fetchRouteBetween(origin, destination, profile = 'driving') {
  const url = `https://router.project-osrm.org/route/v1/${profile}/${origin.lng},${origin.lat};${destination.lng},${destination.lat}?overview=full&geometries=geojson&steps=false`;
  const response = await fetch(url);
  const data = await response.json();
  if (!data.routes || !data.routes.length) {
    throw new Error('No se pudo calcular la ruta.');
  }
  const route = data.routes[0];
  return {
    geometry: route.geometry,
    distance: route.distance,
    duration: route.duration
  };
}

function drawRoute(mapInstance, geometry, markers = []) {
  if (!mapInstance || !window.L || !geometry) return null;
  const layer = L.geoJSON(geometry, {
    style: { color: '#2563eb', weight: 5 }
  }).addTo(mapInstance);
  const bounds = layer.getBounds();
  markers.forEach(marker => {
    if (marker) marker.addTo(mapInstance);
  });
  if (bounds.isValid()) {
    mapInstance.fitBounds(bounds, { padding: [20, 20] });
  }
  return layer;
}

function createMarker(latlng, options = {}) {
  if (!window.L || !latlng) return null;
  return L.marker(latlng, options);
}

function initializeDetailEvents() {
  const calculateBtn = document.getElementById('calculateVehicleRoute');
  if (calculateBtn) {
    calculateBtn.addEventListener('click', function(e) {
      e.preventDefault();
      calculateVehicleFormRoute();
    });
  }

  const publishVehicleTab = document.querySelector('[data-tab="publicar-vehiculo"]');
  if (publishVehicleTab) {
    publishVehicleTab.addEventListener('click', function() {
      setTimeout(() => {
        if (vehicleFormMap) {
          vehicleFormMap.invalidateSize();
        }
      }, 200);
    });
  }

  const closeDetailBtn = document.getElementById('closeTripDetailBtn');
  const closeDetailAction = document.getElementById('tripDetailCloseAction');
  [closeDetailBtn, closeDetailAction].forEach(btn => {
    if (btn) {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        closeTripDetailModal();
      });
    }
  });

  const joinDetailBtn = document.getElementById('tripDetailJoinBtn');
  if (joinDetailBtn) {
    joinDetailBtn.addEventListener('click', function(e) {
      e.preventDefault();
      handleJoinFromDetail();
    });
  }

  const participantsContainer = document.getElementById('tripDetailParticipants');
  if (participantsContainer) {
    participantsContainer.addEventListener('click', function(e) {
      const starBtn = e.target.closest('.participant-star');
      if (!starBtn) return;
      const participantId = starBtn.getAttribute('data-participant-id');
      const rating = Number(starBtn.getAttribute('data-rating'));
      setParticipantRating(participantId, rating);
    });
  }

}

async function calculateVehicleFormRoute() {
  try {
    if (!vehicleFormMap) {
      initializeMaps();
    }
    const form = document.getElementById('vehicleTripForm');
    if (!form) return;
    const formData = new FormData(form);
    const origin = formData.get('origin');
    const destination = formData.get('destination');
    const vehicleType = formData.get('vehicleType') || 'Automóvil';

    if (!origin || !destination) {
      showNotification('Completa el origen y destino para calcular la ruta.', 'warning');
      return;
    }

    showNotification('Calculando ruta...', 'info');
    const [originCoords, destCoords] = await Promise.all([
      geocodeAddress(origin),
      geocodeAddress(destination)
    ]);

    const profile = normalizeText(vehicleType).includes('motocicleta') ? 'driving' : 'driving';
    const routeData = await fetchRouteBetween(originCoords, destCoords, profile);
    
    vehicleFormRouteData = {
      geometry: routeData.geometry,
      distance: routeData.distance,
      duration: routeData.duration,
      origin: originCoords,
      destination: destCoords
    };

    if (vehicleFormRouteLayer) {
      vehicleFormMap.removeLayer(vehicleFormRouteLayer);
    }
    Object.values(vehicleFormMarkers).forEach(marker => {
      if (marker) vehicleFormMap.removeLayer(marker);
    });

    vehicleFormMarkers = {
      start: createMarker([originCoords.lat, originCoords.lng]),
      end: createMarker([destCoords.lat, destCoords.lng])
    };

    vehicleFormRouteLayer = drawRoute(vehicleFormMap, routeData.geometry, [
      vehicleFormMarkers.start,
      vehicleFormMarkers.end
    ]);
    markMapReady('vehicleFormMap');
    showNotification('Ruta actualizada correctamente.', 'success');
    return vehicleFormRouteData;
  } catch (error) {
    console.error('Error calculando ruta:', error);
    showNotification(error.message || 'No se pudo calcular la ruta.', 'error');
    return null;
  }
}

async function loadInitialData() {
  if (!window.fetch) {
    console.warn('Fetch API no disponible, se mantiene data local.');
    setBackendAvailability(false, {
      force: true,
      helper: 'Tu navegador no soporta las peticiones necesarias.'
    });
    return;
  }

  if (rootDataLoading) {
    console.info('Ya existe una sincronizacion en curso.');
    return;
  }

  rootDataLoading = true;
  updateSyncIndicator('syncing');

  try {
    const [
      publicTripsResponse,
      vehicleTripsResponse,
      safetyReportsResponse,
      userTripsResponse,
      panicAlertsResponse,
      profileResponse
    ] = await Promise.all([
      fetchPublicTripsFromApi({ limit: PUBLIC_TRIPS_PAGE_SIZE }),
      fetchVehicleTripsFromApi({ limit: VEHICLE_TRIPS_PAGE_SIZE }),
      fetchSafetyReportsFromApi({ limit: SAFETY_REPORTS_PAGE_SIZE }),
      fetchUserTripsFromApi(),
      fetchPanicAlertsFromApi({ limit: 10 }),
      fetchUserProfileFromApi()
    ]);

    const publicTrips = extractArrayResponse(publicTripsResponse);
    if (publicTrips.length) {
      appData.publicTransportTrips = publicTrips;
      publicTripsMeta = {
        total: publicTripsResponse.meta?.total ?? publicTrips.length,
        filters: publicTripsResponse.meta?.filters || { mode: null },
        generatedAt: publicTripsResponse.meta?.generatedAt || new Date().toISOString()
      };
    }

    const vehicleTrips = extractArrayResponse(vehicleTripsResponse);
    if (vehicleTrips.length) {
      appData.vehicleTrips = vehicleTrips;
      vehicleTripsMeta = {
        total: vehicleTripsResponse.meta?.total ?? vehicleTrips.length,
        filters: vehicleTripsResponse.meta?.filters || { type: 'todos' },
        generatedAt: vehicleTripsResponse.meta?.generatedAt || new Date().toISOString()
      };
    }

    const safetyReports = extractArrayResponse(safetyReportsResponse);
    if (safetyReports.length) {
      appData.safetyReports = safetyReports;
      safetyReportsMeta = {
        total: safetyReportsResponse.meta?.total ?? safetyReports.length,
        filters: safetyReportsResponse.meta?.filters || { type: null, severity: null },
        generatedAt: safetyReportsResponse.meta?.generatedAt || new Date().toISOString()
      };
    }

    if (userTripsResponse && typeof userTripsResponse === 'object') {
      hydrateUserTrips(userTripsResponse);
    } else {
      userTripsLoaded = true;
    }

    const panicAlerts = extractArrayResponse(panicAlertsResponse);
    if (panicAlerts.length) {
      appData.panicAlerts = panicAlerts;
      panicAlertsMeta = {
        total: panicAlertsResponse.meta?.total ?? panicAlerts.length,
        generatedAt: panicAlertsResponse.meta?.generatedAt || new Date().toISOString()
      };
    }

    if (profileResponse && profileResponse.data) {
      mergeProfileFromApi(profileResponse.data);
      setProfileSyncState({ status: 'online', updatedAt: new Date().toISOString() });
    } else {
      setProfileSyncState({ status: backendAvailable ? 'idle' : 'offline' });
    }

    setBackendAvailability(true, {
      force: true,
      timestamp: new Date().toISOString()
    });
    renderInitialData();
    applyUserPreferences();
    renderHomeStats();
    updatePublicTripsSummary();
    updateVehicleTripsSummary();
    updateSafetyReportsSummary();
    renderPanicAlertCard();
    renderPanicHistory();
    renderCommunityPulse();
  } catch (error) {
    setBackendAvailability(false, {
      helper: 'Servidor no disponible, mostrando datos demo.'
    });
    console.warn('No se pudo cargar informacion desde el backend:', error);
    showNotification('Servidor no disponible, mostrando datos demo.', 'warning');
    updatePublicTripsSummary();
    updateVehicleTripsSummary();
    updateSafetyReportsSummary();
    renderHomeStats();
    applyUserPreferences();
    userTripsLoaded = true;
    renderPanicAlertCard();
    renderPanicHistory();
    renderCommunityPulse();
  } finally {
    rootDataLoading = false;
  }
}

async function retryBackendSync() {
  if (rootDataLoading) {
    showNotification('Ya estamos sincronizando datos.', 'info');
    return;
  }
  showNotification('Reintentando sincronizacion con el servidor...', 'info');
  await loadInitialData();
}

function setBackendAvailability(isAvailable, options = {}) {
  const nextState = Boolean(isAvailable);
  const previousState = backendAvailable;
  backendAvailable = nextState;

  if (nextState) {
    lastBackendSync = options.timestamp || new Date().toISOString();
  }

  const shouldUpdateIndicator =
    options.force || previousState !== nextState || (nextState && options.timestamp);

  if (shouldUpdateIndicator) {
    updateSyncIndicator(nextState ? 'online' : 'offline', {
      helper: options.helper,
      timestamp: lastBackendSync
    });
  }
}

function updateSyncIndicator(state = 'online', options = {}) {
  const indicator = document.getElementById('appSyncIndicator');
  if (!indicator) return;

  indicator.classList.remove('is-online', 'is-offline', 'is-syncing');
  indicator.classList.add('is-' + state);

  const copy = SYNC_STATUS_COPY[state] || {};
  const labelEl = document.getElementById('syncStatusLabel');
  const helperEl = document.getElementById('syncStatusHelper');
  const retryBtn = document.getElementById('retrySyncBtn');

  if (labelEl) {
    labelEl.textContent = options.label || copy.label || '';
  }

  if (helperEl) {
    let helperText = options.helper || copy.helper || '';
    if (!options.helper && state === 'online' && options.timestamp) {
      helperText = 'Actualizado ' + formatRelativeTime(options.timestamp);
    }
    helperEl.textContent = helperText;
  }

  if (retryBtn) {
    const disableRetry = state === 'online' || state === 'syncing';
    retryBtn.disabled = disableRetry;
    retryBtn.classList.toggle('is-loading', state === 'syncing');
    retryBtn.setAttribute('aria-busy', state === 'syncing');
  }
}



async function apiGet(path) {
  return apiRequest(path, { method: 'GET' });
}

async function apiPost(path, payload) {
  return apiRequest(path, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });
}

async function apiPatch(path, payload) {
  return apiRequest(path, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });
}

async function apiRequest(path, options = {}) {
  const endpoint = `${API_BASE_URL}${path}`;
  try {
    const response = await fetch(endpoint, options);

    if (!response.ok) {
      let errorMessage = `Error ${response.status}`;
      try {
        const errorBody = await response.json();
        if (errorBody?.message) {
          errorMessage = errorBody.message;
        }
      } catch (_) {
        // ignore JSON parse errors
      }

      if (response.status >= 500) {
        setBackendAvailability(false, {
          helper: 'Servicio temporalmente sin respuesta.'
        });
      }

      throw new Error(errorMessage);
    }

    setBackendAvailability(true, { timestamp: new Date().toISOString() });

    if (response.status === 204) {
      return null;
    }

    return response.json();
  } catch (error) {
    if (error instanceof TypeError || /Failed to fetch/i.test(error.message || '')) {
      setBackendAvailability(false, {
        helper: 'No se pudo contactar al servidor, usando datos locales.'
      });
    }
    throw error;
  }
}

function normalizeApiListResponse(payload) {
  if (!payload) {
    return { data: [], meta: {} };
  }
  if (Array.isArray(payload)) {
    return { data: payload, meta: {} };
  }
  if (Array.isArray(payload.data)) {
    return { data: payload.data, meta: payload.meta || {} };
  }
  return { data: [], meta: payload.meta || {} };
}

function extractArrayResponse(payload) {
  if (Array.isArray(payload)) return payload;
  if (payload && Array.isArray(payload.data)) {
    return payload.data;
  }
  return [];
}

function buildQueryString(params = {}) {
  const query = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value === undefined || value === null || value === '' || Number.isNaN(value)) {
      return;
    }
    query.append(key, value);
  });
  const serialized = query.toString();
  return serialized ? `?${serialized}` : '';
}

async function fetchPublicTripsFromApi(params = {}) {
  const queryParams = {
    limit: params.limit || PUBLIC_TRIPS_PAGE_SIZE,
    page: params.page || publicTripsFilters.page || 1
  };
  if (params.mode) {
    queryParams.mode = params.mode;
  }
  if (params.date) {
    queryParams.date = params.date;
  }
  const response = await apiGet(`/public-trips${buildQueryString(queryParams)}`);
  return normalizeApiListResponse(response);
}

async function fetchVehicleTripsFromApi(params = {}) {
  const queryParams = {
    limit: params.limit || VEHICLE_TRIPS_PAGE_SIZE,
    page: params.page || vehicleTripsFilters.page || 1
  };
  if (params.type) queryParams.type = params.type;
  if (params.seatsMin) queryParams.seatsMin = params.seatsMin;
  if (params.donationMax) queryParams.donationMax = params.donationMax;
  if (params.date) queryParams.date = params.date;
  const response = await apiGet(`/vehicle-trips${buildQueryString(queryParams)}`);
  return normalizeApiListResponse(response);
}

async function fetchSafetyReportsFromApi(params = {}) {
  const queryParams = {
    limit: params.limit || SAFETY_REPORTS_PAGE_SIZE,
    page: params.page || safetyReportsFilters.page || 1
  };
  if (params.type && params.type !== 'todos') {
    queryParams.type = params.type;
  }
  if (params.severity && params.severity !== 'todos') {
    queryParams.severity = params.severity;
  }
  const response = await apiGet(`/safety-reports${buildQueryString(queryParams)}`);
  return normalizeApiListResponse(response);
}

async function fetchUserTripsFromApi() {
  return apiGet('/user-trips');
}

async function fetchPanicAlertsFromApi(params = {}) {
  const queryParams = {
    limit: params.limit || 10
  };
  const response = await apiGet(`/panic-alerts${buildQueryString(queryParams)}`);
  return normalizeApiListResponse(response);
}

async function fetchUserProfileFromApi() {
  return apiGet('/profile');
}

async function fetchTripChat(tripId) {
  return apiGet(`/chats/${tripId}/messages`);
}

async function postTripChatMessage(tripId, payload) {
  return apiPost(`/chats/${tripId}/messages`, payload);
}

function initializeNavigation() {
  console.log('Initializing navigation...');
  
  // Menu toggle functionality
  const menuToggle = document.getElementById('menuToggle');
  const sideNav = document.getElementById('sideNav');
  const overlay = document.getElementById('overlay');
  const closeNav = document.getElementById('closeNav');

  if (menuToggle && sideNav && overlay && closeNav) {
    menuToggle.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('Menu toggle clicked');
      openMenu();
    });

    closeNav.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('Close nav clicked');
      closeMenu();
    });

    overlay.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('Overlay clicked');
      closePanicHistoryDrawer();
      closeMenu();
    });
  }

  // Navigation links and buttons
  const navLinks = document.querySelectorAll('[data-section]');
  navLinks.forEach(link => {
    const section = link.getAttribute('data-section');
    if (link.tagName === 'A') {
      link.setAttribute('href', getSectionPath(section));
    }

    link.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('Navigation to section:', section);
      navigateToSection(section);
      if (link.closest('.sidenav')) {
        closeMenu();
      }
    });
  });

  // Tab switching
  const tabBtns = document.querySelectorAll('.tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const tabId = this.getAttribute('data-tab');
      console.log('Tab switch to:', tabId);
      switchTab(this, tabId);
    });
  });

  // Panic button
  const panicBtn = document.getElementById('panicBtn');
  if (panicBtn) {
    panicBtn.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('Panic button clicked');
      activatePanicMode();
    });
  }

  const activateNowBtn = document.getElementById('activateNowBtn');
  if (activateNowBtn) {
    activateNowBtn.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('Manual panic activation requested');
      triggerPanicAlert();
    });
  }

  const cancelCountdownBtn = document.getElementById('cancelCountdownBtn');
  if (cancelCountdownBtn) {
    cancelCountdownBtn.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('Countdown canceled');
      cancelPanicAlert();
    });
  }

  const cancelActiveBtn = document.getElementById('cancelActiveBtn');
  if (cancelActiveBtn) {
    cancelActiveBtn.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('Active panic canceled');
      cancelPanicAlert();
    });
  }

  const keepBrowsingBtn = document.getElementById('keepBrowsingBtn');
  if (keepBrowsingBtn) {
    keepBrowsingBtn.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('Keep browsing clicked');
      dismissPanicModal();
    });
  }

  console.log('Navigation initialized');
}

function initializeStatusControls() {
  const retryBtn = document.getElementById('retrySyncBtn');
  if (retryBtn) {
    retryBtn.addEventListener('click', function(e) {
      e.preventDefault();
      retryBackendSync();
    });
  }

  const refreshAlertsBtn = document.getElementById('refreshPanicAlertsBtn');
  if (refreshAlertsBtn) {
    refreshAlertsBtn.addEventListener('click', function(e) {
      e.preventDefault();
      refreshPanicAlerts();
    });
  }

  const openHistoryBtn = document.getElementById('openPanicHistoryBtn');
  if (openHistoryBtn) {
    openHistoryBtn.addEventListener('click', function(e) {
      e.preventDefault();
      openPanicHistoryDrawer();
    });
  }

  const closeHistoryBtn = document.getElementById('closePanicHistoryBtn');
  if (closeHistoryBtn) {
    closeHistoryBtn.addEventListener('click', function(e) {
      e.preventDefault();
      closePanicHistoryDrawer();
    });
  }

  const closeFeedbackBtn = document.getElementById('closeFeedbackModalBtn');
  if (closeFeedbackBtn) {
    closeFeedbackBtn.addEventListener('click', function(e) {
      e.preventDefault();
      closeTripFeedbackModal();
    });
  }

  const feedbackRatingInput = document.getElementById('feedbackRating');
  if (feedbackRatingInput) {
    feedbackRatingInput.addEventListener('input', updateFeedbackRatingLabel);
  }

  updateSyncIndicator('syncing');
}

function openMenu() {
  const sideNav = document.getElementById('sideNav');
  const overlay = document.getElementById('overlay');
  
  if (sideNav && overlay) {
    sideNav.classList.add('open');
    overlay.classList.add('active');
    overlay.classList.remove('for-drawer');
    document.body.style.overflow = 'hidden';
    console.log('Menu opened');
  }
}

function closeMenu() {
  const sideNav = document.getElementById('sideNav');
  const overlay = document.getElementById('overlay');
  
  if (sideNav && overlay) {
    sideNav.classList.remove('open');
    if (!panicHistoryOpen) {
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    } else {
      overlay.classList.add('for-drawer');
    }
    console.log('Menu closed');
  }
}

function openPanicHistoryDrawer() {
  const drawer = document.getElementById('panicHistoryDrawer');
  const overlay = document.getElementById('overlay');
  if (!drawer) return;
  drawer.classList.remove('hidden');
  panicHistoryOpen = true;
  if (overlay) {
    overlay.classList.add('active', 'for-drawer');
  }
  document.body.style.overflow = 'hidden';
  renderPanicHistory();
}

function closePanicHistoryDrawer() {
  const drawer = document.getElementById('panicHistoryDrawer');
  const overlay = document.getElementById('overlay');
  const sideNav = document.getElementById('sideNav');
  if (drawer) {
    drawer.classList.add('hidden');
  }
  panicHistoryOpen = false;
  if (overlay) {
    overlay.classList.remove('for-drawer');
    if (!sideNav || !sideNav.classList.contains('open')) {
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    } else {
      document.body.style.overflow = 'hidden';
    }
  } else {
    document.body.style.overflow = '';
  }
}

function showSection(sectionId) {
  console.log('Showing section:', sectionId);
  const previousSection = currentSection;
  
  // Hide all sections
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    section.classList.remove('active');
  });

  // Show target section
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.classList.add('active');
    currentSection = sectionId;
    console.log('Section activated:', sectionId);
    if (previousSection === 'chat' && sectionId !== 'chat') {
      stopChatPolling();
    }
    if (sectionId === 'chat' && currentChatTrip) {
      startChatPolling(currentChatTrip);
    }
  } else {
    console.error('Section not found:', sectionId);
  }

  // Update navigation active state
  const navLinks = document.querySelectorAll('[data-section]');
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('data-section') === sectionId) {
      link.classList.add('active');
    }
  });
}

function navigateToSection(sectionId, options = {}) {
  const targetSection = routeMap[sectionId] ? sectionId : defaultSection;
  const path = getSectionPath(targetSection);
  const method = options.replace ? 'replaceState' : 'pushState';

  showSection(targetSection);
  updateHistoryState(method, targetSection, path);
}

function handleInitialRoute() {
  const sectionFromPath = resolveSectionFromPath(window.location.pathname);
  const sanitizedSection = routeMap[sectionFromPath] ? sectionFromPath : defaultSection;
  const path = getSectionPath(sanitizedSection);

  showSection(sanitizedSection);
  updateHistoryState('replaceState', sanitizedSection, path);
}

function handlePopState(event) {
  const sectionId = event.state?.section || resolveSectionFromPath(window.location.pathname);
  const targetSection = routeMap[sectionId] ? sectionId : defaultSection;
  showSection(targetSection);
}

function resolveSectionFromPath(pathname = '/') {
  const normalizedPath = normalizePath(pathname);
  if (pathToSectionMap[normalizedPath]) {
    return pathToSectionMap[normalizedPath];
  }

  const segments = normalizedPath.split('/').filter(Boolean);
  if (segments.length) {
    const lastSegmentPath = `/${segments[segments.length - 1]}`;
    if (pathToSectionMap[lastSegmentPath]) {
      return pathToSectionMap[lastSegmentPath];
    }
  }

  return defaultSection;
}

function getSectionPath(sectionId) {
  return routeMap[sectionId] || routeMap[defaultSection] || '/';
}

function normalizePath(pathname = '/') {
  const sanitized = pathname.split('?')[0].split('#')[0];
  let normalized = sanitized.toLowerCase();

  if (!normalized.startsWith('/')) {
    normalized = `/${normalized}`;
  }

  if (normalized.length > 1 && normalized.endsWith('/')) {
    normalized = normalized.slice(0, -1);
  }

  return normalized || '/';
}

function buildPathToSection(map) {
  const lookup = {
    '/': defaultSection,
    '/index.html': defaultSection
  };

  Object.entries(map).forEach(([section, path]) => {
    lookup[normalizePath(path)] = section;
  });

  return lookup;
}

function updateHistoryState(method, section, path) {
  if (!window.history || typeof window.history[method] !== 'function') {
    return;
  }

  try {
    window.history[method]({ section }, '', path);
  } catch (error) {
    console.warn('Unable to update browser history:', error);
  }
}

function switchTab(tabBtn, tabId) {
  const tabContainer = tabBtn.closest('.container') || tabBtn.closest('.section');
  
  if (!tabContainer) {
    console.error('Tab container not found');
    return;
  }
  
  // Remove active class from all tab buttons in this container
  const containerTabBtns = tabContainer.querySelectorAll('.tab-btn');
  containerTabBtns.forEach(btn => btn.classList.remove('active'));
  
  // Add active class to clicked tab
  tabBtn.classList.add('active');

  // Hide all tab content in this container
  const tabContents = tabContainer.querySelectorAll('.tab-content');
  tabContents.forEach(content => content.classList.remove('active'));

  // Show target tab content
  const targetContent = document.getElementById(tabId);
  if (targetContent) {
    targetContent.classList.add('active');
    console.log('Tab activated:', tabId);
    handleTabShown(tabId);
  } else {
    console.error('Tab content not found:', tabId);
  }
}

function activatePanicMode() {
  const countdownModal = document.getElementById('panicCountdownModal');
  const activeModal = document.getElementById('panicActiveModal');
  if (!countdownModal || !activeModal) return;

  if (panicAlertActive) {
    countdownModal.classList.add('hidden');
    activeModal.classList.remove('hidden');
    updatePanicContacts();
    showNotification('El botón de pánico ya está activo.', 'warning');
    return;
  }

  activeModal.classList.add('hidden');
  countdownModal.classList.remove('hidden');
  panicAlertActive = false;
  warmupPanicLocation();
  startPanicCountdown();
  showNotification('El botón de pánico se activará en 5 segundos.', 'warning');
}

function handleTabShown(tabId) {
  if (tabId === 'publicar-vehiculo' && vehicleFormMap) {
    setTimeout(() => vehicleFormMap.invalidateSize(), 150);
  }
}

function startPanicCountdown() {
  const countdownModal = document.getElementById('panicCountdownModal');
  if (!countdownModal) return;

  clearInterval(panicTimerId);
  panicSecondsRemaining = PANIC_COUNTDOWN_SECONDS;
  countdownModal.classList.remove('hidden');
  document.getElementById('panicActiveModal')?.classList.add('hidden');
  updateCountdownDisplay();
  playPanicAudioCue();

  panicTimerId = setInterval(() => {
    panicSecondsRemaining -= 1;
    if (panicSecondsRemaining <= 0) {
      updateCountdownDisplay();
      triggerPanicAlert();
    } else {
      updateCountdownDisplay();
    }
  }, 1000);
}

async function triggerPanicAlert() {
  if (panicAlertActive) return;

  panicAlertActive = true;
  clearInterval(panicTimerId);
  panicTimerId = null;
  const countdownModal = document.getElementById('panicCountdownModal');
  const activeModal = document.getElementById('panicActiveModal');
  if (countdownModal) countdownModal.classList.add('hidden');
  if (activeModal) {
    activeModal.classList.remove('hidden');
    updatePanicContacts();
  }
  updateCountdownDisplay();
  playPanicAudioCue();
  try {
    await dispatchPanicAlert();
    showNotification('Bot?n de p?nico activado. Alertas enviadas.', 'error');
  } catch (error) {
    console.error('No se pudo despachar la alerta de p?nico:', error);
    showNotification('No pudimos notificar a la red. Mantente alerta.', 'warning');
  }
}

function updateCountdownDisplay() {
  const timerEl = document.getElementById('panicTimer');
  if (!timerEl) return;

  const seconds = Math.max(0, panicSecondsRemaining);
  timerEl.textContent = `${seconds}s`;
}

function updatePanicContacts() {
  const contactsEl = document.getElementById('panicContactsList');
  if (!contactsEl) return;

  contactsEl.textContent = buildPanicRecipientsMessage({ detailed: true });
}

function cancelPanicAlert() {
  const countdownModal = document.getElementById('panicCountdownModal');
  const activeModal = document.getElementById('panicActiveModal');
  if (countdownModal) countdownModal.classList.add('hidden');
  if (activeModal) activeModal.classList.add('hidden');

  const wasActive = panicAlertActive;
  resetPanicState();
  const message = wasActive
    ? 'La alerta fue cancelada y se notificó al sistema.'
    : 'Has cancelado la activación del botón de pánico.';
  showNotification(message, wasActive ? 'warning' : 'info');
}

function dismissPanicModal() {
  const countdownModal = document.getElementById('panicCountdownModal');
  const activeModal = document.getElementById('panicActiveModal');
  if (countdownModal) countdownModal.classList.add('hidden');
  if (activeModal) activeModal.classList.add('hidden');

  if (!panicAlertActive) {
    resetPanicState();
  } else {
    showNotification('Alerta activa. Puedes seguir navegando.', 'info');
  }
}

function resetPanicState() {
  clearInterval(panicTimerId);
  panicTimerId = null;
  panicAlertActive = false;
  panicSecondsRemaining = PANIC_COUNTDOWN_SECONDS;
  updateCountdownDisplay();
}

function playPanicAudioCue() {
  if (!userPreferences.panic?.sound) return;
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtx) return;

  try {
    panicAudioContext = panicAudioContext || new AudioCtx();
    const ctx = panicAudioContext;
    if (ctx.state === 'suspended') {
      ctx.resume();
    }
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();
    oscillator.type = 'triangle';
    oscillator.frequency.value = 880;
    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);
    const now = ctx.currentTime;
    gainNode.gain.setValueAtTime(0.0001, now);
    gainNode.gain.exponentialRampToValueAtTime(0.3, now + 0.05);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 0.45);
    oscillator.start(now);
    oscillator.stop(now + 0.45);
  } catch (error) {
    console.warn('No se pudo reproducir la alerta sonora:', error);
  }
}


async function warmupPanicLocation() {
  if (!navigator.geolocation) {
    panicLocationCache = null;
    return null;
  }

  const shouldRequest = !panicLocationRequestedAt || (Date.now() - panicLocationRequestedAt > 60 * 1000);
  if (!shouldRequest && panicLocationCache) {
    return panicLocationCache;
  }

  panicLocationRequestedAt = Date.now();
  return new Promise(resolve => {
    navigator.geolocation.getCurrentPosition(
      position => {
        panicLocationCache = {
          lat: Number(position.coords.latitude),
          lng: Number(position.coords.longitude),
          accuracy: Number(position.coords.accuracy || 0)
        };
        resolve(panicLocationCache);
      },
      () => resolve(null),
      { enableHighAccuracy: true, timeout: 8000, maximumAge: 0 }
    );
  });
}

async function dispatchPanicAlert(additional = {}) {
  const recipients = getEnabledPanicRecipients({ fallback: true });
  if (!recipients.length) {
    showNotification('Configura al menos un destinatario del botón de pánico en Configuración.', 'warning');
    return null;
  }

  const payload = {
    triggeredBy: (appData.users?.[0]?.name) || 'Usuario Conecta',
    triggeredAt: new Date().toISOString(),
    countdown: PANIC_COUNTDOWN_SECONDS,
    recipients,
    config: userPreferences.panic || {},
    location: panicLocationCache,
    status: 'active',
    notes: additional.notes || ''
  };

  let storedAlert = { ...payload, id: Date.now().toString() };

  if (backendAvailable) {
    try {
      const response = await apiPost('/panic-alerts', payload);
      storedAlert = response?.data || response || storedAlert;
      panicAlertsMeta = {
        total: response?.meta?.total ?? panicAlertsMeta.total,
        generatedAt: response?.meta?.generatedAt || new Date().toISOString()
      };
    } catch (error) {
      setBackendAvailability(false, {
        helper: 'No se pudo contactar al backend de alertas.'
      });
      console.error('Error enviando alerta de pánico:', error);
      showNotification('No pudimos notificar al backend, guardaremos la alerta localmente.', 'warning');
    }
  }

  appData.panicAlerts = [storedAlert, ...(appData.panicAlerts || [])];
  panicAlertsMeta.total = appData.panicAlerts.length;
  panicAlertsMeta.generatedAt = new Date().toISOString();
  renderPanicAlertCard();
  renderPanicHistory();
  return storedAlert;
}

function setPanicAlertsLoading(isLoading) {
  panicAlertsLoading = isLoading;
  const refreshBtn = document.getElementById('refreshPanicAlertsBtn');
  if (refreshBtn) {
    refreshBtn.disabled = isLoading;
    refreshBtn.classList.toggle('is-loading', isLoading);
  }
}

async function refreshPanicAlerts() {
  if (panicAlertsLoading) return;
  if (!backendAvailable) {
    showNotification('Sin conexión con el servidor, no es posible sincronizar las alertas.', 'warning');
    return;
  }

  setPanicAlertsLoading(true);
  try {
    const response = await fetchPanicAlertsFromApi({ limit: 10 });
    const alerts = extractArrayResponse(response);
    if (alerts.length) {
      appData.panicAlerts = alerts;
      panicAlertsMeta = {
        total: response.meta?.total ?? alerts.length,
        generatedAt: response.meta?.generatedAt || new Date().toISOString()
      };
      renderPanicAlertCard();
      renderPanicHistory();
    }
    showNotification('Alertas sincronizadas correctamente.', 'success');
  } catch (error) {
    console.error('No se pudieron actualizar las alertas de pánico:', error);
    showNotification('No pudimos sincronizar las alertas.', 'error');
  } finally {
    setPanicAlertsLoading(false);
  }
}

function renderPanicAlertCard() {
  const statusEl = document.getElementById('panicAlertStatus');
  const chipEl = document.getElementById('panicAlertStateChip');
  const recipientsEl = document.getElementById('panicAlertRecipientsList');
  const timestampEl = document.getElementById('panicAlertTimestamp');
  const card = document.getElementById('panicAlertCard');
  if (!card || !statusEl || !chipEl || !recipientsEl || !timestampEl) {
    return;
  }

  const latest = (appData.panicAlerts || [])[0];
  chipEl.classList.remove('is-online', 'is-offline');
  const formatRecipients = (list) => {
    if (!Array.isArray(list) || !list.length) {
      return '<li>Selecciona destinatarios desde Configuración.</li>';
    }
    return list.map(recipient => `<li>${formatRecipientLabel(recipient)}</li>`).join('');
  };

  if (latest) {
    const statusLabel = latest.status === 'resolved' ? 'Resuelta' : 'Activa';
    chipEl.textContent = statusLabel;
    chipEl.classList.toggle('is-online', latest.status === 'resolved');
    chipEl.classList.toggle('is-offline', latest.status !== 'resolved');
    statusEl.textContent = `${statusLabel} por ${latest.triggeredBy}`;
    recipientsEl.innerHTML = formatRecipients(latest.recipients);
    const updatedLabel = latest.triggeredAt
      ? `Registrada ${formatRelativeTime(latest.triggeredAt)}`
      : 'Registro sin marca de tiempo';
    timestampEl.textContent = updatedLabel;
  } else {
    chipEl.textContent = 'En calma';
    chipEl.classList.add('is-online');
    statusEl.textContent = 'Sin alertas registradas en las últimas 24 h.';
    const fallbackRecipients = getEnabledPanicRecipients({ fallback: false });
    recipientsEl.innerHTML = formatRecipients(fallbackRecipients);
    timestampEl.textContent = panicAlertsMeta.generatedAt
      ? `Actualizado ${formatRelativeTime(panicAlertsMeta.generatedAt)}`
      : 'Aún sin sincronizar.';
  }
}

function renderPanicHistory() {
  const listEl = document.getElementById('panicHistoryList');
  if (!listEl) return;

  const alerts = appData.panicAlerts || [];
  if (!alerts.length) {
    listEl.innerHTML = '<p class="drawer-empty">Aún no tienes alertas registradas.</p>';
    return;
  }

  listEl.innerHTML = alerts
    .slice(0, 20)
    .map(alert => `
      <div class="panic-history-item">
        <h4>${alert.triggeredBy}</h4>
        <div class="panic-history-meta">
          <span>${alert.status === 'resolved' ? 'Resuelta' : 'Activa'}</span>
          <span>${alert.triggeredAt ? formatRelativeTime(alert.triggeredAt) : 'Sin marca'}</span>
          ${alert.location ? `<span>Lat: ${Number(alert.location.lat).toFixed(3)}, Lng: ${Number(alert.location.lng).toFixed(3)}</span>` : ''}
        </div>
        <p class="panic-brief__status">
          Destinatarios: ${alert.recipients?.map(formatRecipientLabel).join(', ') || 'No especificados'}
        </p>
        ${alert.notes ? `<p class="panic-note">${alert.notes}</p>` : ''}
      </div>
    `)
    .join('');
}


function markMapReady(mapElementId) {
  const mapEl = document.getElementById(mapElementId);
  if (!mapEl) return;
  const container = mapEl.closest('.map-container');
  if (container) {
    container.classList.add('has-map');
  }
}

function initializeDarkMode() {
  const darkModeToggle = document.getElementById('darkModeToggle');
  if (!darkModeToggle) return;

  darkModeToggle.checked = userPreferences.theme === 'dark';
  darkModeToggle.addEventListener('change', function() {
    userPreferences.theme = this.checked ? 'dark' : 'light';
    persistUserPreferences();
    applyUserPreferences();
    showNotification(`Modo ${userPreferences.theme === 'dark' ? 'oscuro' : 'claro'} activado`, 'info');
  });
}

function populateMetroLines() {
  const metroLineSelect = document.querySelector('[name="metroLine"]');
  if (metroLineSelect) {
    appData.metroLines.forEach(line => {
      const option = document.createElement('option');
      option.value = line;
      option.textContent = line;
      metroLineSelect.appendChild(option);
    });
  }
}

function initializeForms() {
  // Public transport form
  const publicTripForm = document.getElementById('publicTripForm');
  if (publicTripForm) {
    publicTripForm.addEventListener('submit', handlePublicTripSubmit);
    
    const modeSelect = publicTripForm.querySelector('[name="mode"]');
    if (modeSelect) {
      updatePublicTransportFields(modeSelect.value);
      modeSelect.addEventListener('change', function() {
        updatePublicTransportFields(this.value);
      });
    }

    initializeDateTimeGuard(publicTripForm);
  }

  // Vehicle trip form
  const vehicleTripForm = document.getElementById('vehicleTripForm');
  if (vehicleTripForm) {
    vehicleTripForm.addEventListener('submit', handleVehicleTripSubmit);
    initializeDateTimeGuard(vehicleTripForm);
  }

  // Safety report form
  const safetyReportForm = document.getElementById('safetyReportForm');
  if (safetyReportForm) {
    safetyReportForm.addEventListener('submit', handleSafetyReportSubmit);
  }

  const feedbackForm = document.getElementById('tripFeedbackForm');
  if (feedbackForm) {
    feedbackForm.addEventListener('submit', handleTripFeedbackSubmit);
  }

  const profileForm = document.getElementById('profileForm');
  if (profileForm) {
    initializeProfileForm(profileForm);
  }

  initializeConfigurationPanel();
  setDefaultDates();
  initializeSwapButtons();
  initializeRegistrationForm();
}

function initializeProfileForm(form) {
  form.addEventListener('submit', handleProfileFormSubmit);
  form.addEventListener('input', function() {
    setProfileFormStatus('Tienes cambios sin guardar.', 'pending');
  });

  const avatarInput = document.getElementById('profileAvatarInput');
  const changeAvatarBtn = document.getElementById('changeAvatarBtn');
  if (changeAvatarBtn && avatarInput) {
    changeAvatarBtn.addEventListener('click', function(e) {
      e.preventDefault();
      avatarInput.click();
    });
    avatarInput.addEventListener('change', function() {
      const file = this.files && this.files[0];
      handleAvatarSelection(file);
      this.value = '';
    });
  }
}

function initializeConfigurationPanel() {
  const languageToggle = document.getElementById('languageToggle');
  if (languageToggle) {
    languageToggle.checked = userPreferences.language === 'en';
    languageToggle.addEventListener('change', function() {
      userPreferences.language = this.checked ? 'en' : 'es';
      persistUserPreferences();
      applyUserPreferences();
      showNotification(`Interfaz en ${this.checked ? 'inglés' : 'español'}.`, 'info');
    });
  }

  const panicSoundToggle = document.getElementById('panicSoundToggle');
  if (panicSoundToggle) {
    panicSoundToggle.checked = Boolean(userPreferences.panic?.sound);
    panicSoundToggle.addEventListener('change', function() {
      userPreferences.panic.sound = this.checked;
      persistUserPreferences();
      applyUserPreferences();
      showNotification(`Sonido de alerta ${this.checked ? 'activado' : 'desactivado'}.`, 'info');
    });
  }

  setupPanicRecipientToggle('panicCarabinerosToggle', 'carabineros');
  setupPanicRecipientToggle('panicMunicipalToggle', 'guardiaMunicipal');
  setupPanicRecipientToggle('panicCivilToggle', 'guardiaCivil');
  setupPanicRecipientToggle('panicContactsToggle', 'contacts');
  setupPanicRecipientToggle('panicCommunityToggle', 'community');

  const editProfileBtn = document.getElementById('editEmergencyProfileBtn');
  if (editProfileBtn) {
    editProfileBtn.addEventListener('click', function(e) {
      e.preventDefault();
      navigateToSection('perfil');
      document.getElementById('perfil')?.scrollIntoView({ behavior: 'smooth' });
    });
  }

  renderSettingsPanel();
}

function setupPanicRecipientToggle(elementId, key) {
  const toggle = document.getElementById(elementId);
  if (!toggle) return;
  if (!userPreferences.panic) {
    userPreferences.panic = { sound: true, recipients: {} };
  }
  if (!userPreferences.panic.recipients) {
    userPreferences.panic.recipients = {};
  }
  toggle.checked = Boolean(userPreferences.panic.recipients[key]);
  toggle.addEventListener('change', function() {
    userPreferences.panic.recipients[key] = this.checked;
    persistUserPreferences();
    applyUserPreferences();
    showNotification(`Enviar a ${this.nextElementSibling ? this.nextElementSibling.textContent : key}: ${this.checked ? 'sí' : 'no'}.`, 'info');
  });
}

function renderSettingsPanel() {
  const languageStatusEl = document.getElementById('languageStatus');
  if (languageStatusEl) {
    const langLabel = userPreferences.language === 'en' ? 'inglés' : 'español';
    languageStatusEl.textContent = `Mostrando contenido en ${langLabel}.`;
  }

  const panicSummaryEl = document.getElementById('panicRecipientsSummary');
  if (panicSummaryEl) {
    panicSummaryEl.textContent = buildPanicRecipientsMessage({ detailed: false });
  }

  const panicContactInfoEl = document.getElementById('panicContactInfo');
  if (panicContactInfoEl) {
    const phone = appData.users?.[0]?.phone;
    panicContactInfoEl.textContent = phone
      ? `Alertaremos usando ${phone} como respaldo.`
      : 'Aún no registras un teléfono. Actualízalo desde tu perfil.';
  }
}

function buildPanicRecipientsMessage(options = {}) {
  const { detailed = false } = options;
  const config = userPreferences.panic?.recipients || {};
  const segments = [];

  if (config.carabineros) segments.push('Carabineros');
  if (config.guardiaMunicipal) segments.push('Guardia municipal');
  if (config.guardiaCivil) segments.push('Guardia civil');
  if (config.contacts) {
    if (detailed && Array.isArray(appData.emergencyContacts) && appData.emergencyContacts.length) {
      const contactNames = appData.emergencyContacts
        .map(contact => contact.phone ? `${contact.name} (${contact.phone})` : contact.name)
        .join(', ');
      segments.push(`Contactos: ${contactNames}`);
    } else if (Array.isArray(appData.emergencyContacts) && appData.emergencyContacts.length) {
      segments.push(`Contactos (${appData.emergencyContacts.length})`);
    } else {
      segments.push('Tus contactos de emergencia');
    }
  }
  if (config.community) segments.push('Usuarios de Conecta');

  if (!segments.length) {
    return 'Selecciona al menos un destinatario en Configuración.';
  }

  if (detailed) {
    return segments.join(', ');
  }
  return `Alertas dirigidas a: ${segments.join(', ')}`;
}

function getEnabledPanicRecipients(options = {}) {
  const { fallback = true } = options;
  const config = userPreferences.panic?.recipients || {};
  const enabled = Object.entries(config)
    .filter(([, value]) => Boolean(value))
    .map(([key]) => key);
  if (!enabled.length && fallback) {
    return ['community'];
  }
  return enabled;
}

function formatRecipientLabel(key) {
  const labels = {
    carabineros: 'Carabineros',
    guardiaMunicipal: 'Guardia municipal',
    guardiaCivil: 'Guardia civil',
    contacts: 'Contactos de emergencia',
    community: 'Usuarios Conecta'
  };
  return labels[key] || key;
}

function setDefaultDates(scope) {
  const today = new Date();
  const iso = today.toISOString().split('T')[0];
  const inputs = scope
    ? scope.querySelectorAll('[data-default-date="today"]')
    : document.querySelectorAll('[data-default-date="today"]');

  inputs.forEach(input => {
    if (!input.value) {
      input.value = iso;
    }
    input.min = iso;
  });
}

function initializeSwapButtons() {
  const swapButtons = document.querySelectorAll('.swap-route-btn');
  swapButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      const targetFormId = this.getAttribute('data-target');
      swapRouteFields(targetFormId);
    });
  });
}

function swapRouteFields(formId) {
  if (!formId) return;
  const form = document.getElementById(formId);
  if (!form) return;

  const originInput = form.querySelector('[name="origin"]');
  const destinationInput = form.querySelector('[name="destination"]');

  if (!originInput || !destinationInput) return;

  const temp = originInput.value;
  originInput.value = destinationInput.value;
  destinationInput.value = temp;
}

function initializeDateTimeGuard(form) {
  const dateInput = form.querySelector('[name="date"]');
  const timeInput = form.querySelector('[name="time"]');
  if (!dateInput || !timeInput) return;

  const updateTimeMin = () => {
    const todayIso = new Date().toISOString().split('T')[0];
    if (dateInput.value === todayIso) {
      const now = new Date();
      const current = now.toTimeString().slice(0, 5);
      timeInput.min = current;
    } else {
      timeInput.removeAttribute('min');
    }
  };

  updateTimeMin();
  dateInput.addEventListener('change', updateTimeMin);
}

function refreshTimeConstraints(form) {
  const dateInput = form.querySelector('[name="date"]');
  if (dateInput) {
    dateInput.dispatchEvent(new Event('change'));
  }
}

function validateFormDateTime(form, options = {}) {
  const dateInput = form.querySelector('[name="date"]');
  if (!dateInput) return true;

  const todayIso = new Date().toISOString().split('T')[0];
  const dateValue = dateInput.value;
  if (!dateValue) {
    showNotification('Selecciona una fecha para el viaje.', 'error');
    return false;
  }

  if (dateValue < todayIso) {
    showNotification('No puedes crear viajes con fechas en el pasado.', 'error');
    return false;
  }

  const timeInput = form.querySelector('[name="time"]');
  if (!timeInput) return true;

  const timeValue = timeInput.value;
  if (!timeValue) {
    showNotification('Selecciona una hora para el viaje.', 'error');
    return false;
  }

  if (dateValue === todayIso) {
    const now = new Date();
    const [h, m] = timeValue.split(':').map(Number);
    const selected = new Date();
    selected.setHours(h, m, 0, 0);
    if (selected < now) {
      showNotification('La hora debe ser mayor a la actual para viajes de hoy.', 'error');
      return false;
    }
  }

  return true;
}

function updatePublicTransportFields(mode = '') {
  const normalizedMode = mode || '';
  const isMetro = normalizedMode === 'Metro';
  const isMicro = normalizedMode === 'Micro';

  const originLabel = document.getElementById('originFieldLabel');
  if (originLabel) {
    originLabel.textContent = isMetro
      ? 'Estación de Origen'
      : isMicro
        ? 'Paradero de Origen'
        : 'Origen';
  }

  toggleGroup(document.getElementById('metroLineGroup'), isMetro);
  toggleGroup(document.getElementById('microLineGroup'), isMicro);
  toggleGroup(document.getElementById('directionGroup'), isMetro || isMicro);

  const metroLineSelect = document.getElementById('metroLineSelect');
  if (metroLineSelect) {
    metroLineSelect.required = isMetro;
    metroLineSelect.disabled = !isMetro;
  }

  const microLineInput = document.querySelector('[name="microLine"]');
  if (microLineInput) {
    microLineInput.required = isMicro;
    microLineInput.disabled = !isMicro;
    if (!isMicro) {
      microLineInput.value = '';
    }
  }

  const directionInput = document.querySelector('[name="routeDirection"]');
  if (directionInput) {
    const shouldRequire = isMetro || isMicro;
    directionInput.required = shouldRequire;
    directionInput.disabled = !shouldRequire;
    if (!shouldRequire) {
      directionInput.value = '';
    }
  }
}

function toggleGroup(element, shouldShow) {
  if (!element) return;
  element.classList.toggle('hidden', !shouldShow);
}

function getTripDateValue(trip = {}) {
  return trip.date || trip.day || new Date().toISOString().split('T')[0];
}

function getTripTimeValue(trip = {}) {
  return trip.time || trip.departure_time || trip.start_time || '';
}

function getTripStartTimestamp(trip = {}) {
  const dateValue = getTripDateValue(trip);
  const timeValue = getTripTimeValue(trip);

  if (!dateValue) {
    return Date.now();
  }

  const isoString = timeValue ? `${dateValue}T${timeValue}` : `${dateValue}T00:00`;
  const timestamp = Date.parse(isoString);
  return Number.isNaN(timestamp) ? Date.now() : timestamp;
}

function shouldHideTripFromListings(trip = {}) {
  const startTime = getTripStartTimestamp(trip);
  if (trip.lifecycleStatus === 'completed') return true;
  if (trip.lifecycleStatus === 'in_progress') return true;
  if (trip._forceHidden) return true;

  return Date.now() >= startTime + FIFTEEN_MINUTES;
}

function markTripLifecycleStatus(tripType, tripId, status) {
  let targetCollection = [];
  if (tripType === 'public') {
    targetCollection = appData.publicTransportTrips;
  } else if (tripType === 'vehicle') {
    targetCollection = appData.vehicleTrips;
  }

  const trip = targetCollection.find(item => String(item.id) === String(tripId));
  if (trip) {
    trip.lifecycleStatus = status;
  }
}

function addTripToUserTrips(trip, tripType, options = {}) {
  if (!trip) return;

  const isHost = Boolean(options.isHost);
  const pickupPoint = options.pickupPoint || null;
  const shouldLogActivity = options.logActivity !== false;
  const alreadyInActive = userTrips.active.some(
    item => item.tripType === tripType && String(item.referenceId) === String(trip.id)
  );
  if (alreadyInActive) {
    return null;
  }

  const entryId = `${tripType}_${trip.id}_${Date.now()}`;
  const organizerLabel = tripType === 'public' ? 'Organizador' : 'Conductor';
  const organizer = tripType === 'public'
    ? (trip.creator || 'Usuario Demo')
    : (trip.driver || 'Usuario Demo');

  const dateValue = getTripDateValue(trip);
  const timeValue = getTripTimeValue(trip);
  const title = tripType === 'public'
    ? `${trip.mode || 'Transporte'} · ${trip.origin} → ${trip.destination}`
    : `${trip.vehicle_type || 'Vehículo'} · ${trip.origin} → ${trip.destination}`;

  const entry = {
    id: entryId,
    tripType,
    referenceId: trip.id,
    title,
    organizer,
    organizerLabel,
    date: dateValue,
    time: timeValue,
    startTime: getTripStartTimestamp(trip),
    status: 'Próximo viaje',
    statusClass: 'status--warning',
    isHost,
    hasStarted: false,
    meetingPoint: trip.meetingPoint || trip.meeting_point || '',
    description: trip.description || '',
    routeGeoJSON: trip.routeGeoJSON || trip.route_geojson || null,
    routeStart: trip.routeStart || trip.route_start || null,
    routeEnd: trip.routeEnd || trip.route_end || null,
    routeDistance: trip.routeDistance || trip.route_distance || null,
    routeDuration: trip.routeDuration || trip.route_duration || null,
    pickupPoint,
    vehicle_type: trip.vehicle_type || trip.vehicleType || null,
    participantsTemplate: trip.participantsTemplate || trip.participants_template || null
  };
  entry.chatThreadId = trip.chatThreadId || trip.referenceId || trip.id;

  if (isHost) {
    const profileUser = appData.users?.[0];
    entry.organizerRating = profileUser?.rating || 4.8;
    entry.organizerTrips = profileUser?.trips_created || profileUser?.trips_completed || 0;
    entry.organizerAvatar = profileUser?.photo || createAvatarFromName(profileUser?.name || 'Usuario');
  } else {
    entry.organizerRating = trip.organizerRating || trip.driver_rating || trip.host_rating || 4.5;
    entry.organizerTrips = trip.organizerTrips || trip.driver_trips || trip.host_trips || 0;
    entry.organizerAvatar = trip.organizerAvatar || createAvatarFromName(entry.organizer || 'Conductor');
  }

  userTrips.active.unshift(entry);
  renderActiveTrips();
  if (shouldLogActivity) {
    registerActivity({
      icon: tripType === 'public' ? getTransportIcon(trip.mode) : 'fas fa-car',
      title: isHost ? 'Creaste un viaje' : 'Te uniste a un viaje',
      description: `${trip.origin} → ${trip.destination}`
    });
  }

  return entry;
}

function enhanceUserTripEntry(entry = {}) {
  const normalized = { ...entry };
  normalized.chatThreadId = normalized.chatThreadId || normalized.referenceId || normalized.tripId || normalized.id;
  if (!Array.isArray(normalized.participants) || !normalized.participants.length) {
    normalized.participants = generateParticipantsForTrip(normalized);
  }
  return normalized;
}

function hydrateUserTrips(remote = {}) {
  if (Array.isArray(remote.active)) {
    userTrips.active = remote.active.map(enhanceUserTripEntry);
  }
  if (Array.isArray(remote.completed)) {
    userTrips.completed = remote.completed.map(enhanceUserTripEntry);
  }
  userTripsLoaded = true;
  renderActiveTrips();
  renderCompletedTrips();
}

async function persistUserTripEntry(entry) {
  if (!entry || !backendAvailable) return entry;
  try {
    const response = await apiPost('/user-trips', entry);
    if (response?.data) {
      upsertUserTripEntry(response.data);
      return response.data;
    }
  } catch (error) {
    console.warn('No se pudo sincronizar el viaje del usuario:', error);
  }
  return entry;
}

async function updateUserTripRemote(id, updates = {}) {
  if (!backendAvailable || !id) return null;
  try {
    const response = await apiPatch(`/user-trips/${id}`, updates);
    if (response?.data) {
      upsertUserTripEntry(response.data);
      return response.data;
    }
  } catch (error) {
    console.warn('No se pudo actualizar el viaje del usuario:', error);
  }
  return null;
}

function upsertUserTripEntry(entry) {
  if (!entry) return;
  userTrips.active = userTrips.active.filter(item => item.id !== entry.id);
  userTrips.completed = userTrips.completed.filter(item => item.id !== entry.id);
  const targetList = (entry.status || '').toLowerCase().includes('complet')
    ? userTrips.completed
    : userTrips.active;
  targetList.unshift(entry);
  renderActiveTrips();
  renderCompletedTrips();
}

function startTripLifecycleWatcher() {
  if (lifecycleIntervalId) {
    clearInterval(lifecycleIntervalId);
  }
  lifecycleIntervalId = setInterval(updateTripLifecycle, 60 * 1000);
  updateTripLifecycle();
}

function updateTripLifecycle() {
  const now = Date.now();
  let listsShouldRefresh = false;
  let listingsShouldRefresh = false;

  const remainingActiveTrips = [];

  userTrips.active.forEach(trip => {
    if (!trip.startTime) {
      remainingActiveTrips.push(trip);
      return;
    }

    if (!trip.hasStarted && now >= trip.startTime + FIFTEEN_MINUTES) {
      trip.status = 'En curso';
      trip.statusClass = 'status--info';
      trip.hasStarted = true;
      markTripLifecycleStatus(trip.tripType, trip.referenceId, 'in_progress');
      listingsShouldRefresh = true;
      listsShouldRefresh = true;
    }

    if (now >= trip.startTime + TWO_HOURS) {
      moveTripToCompleted(trip, 'finalizado automáticamente');
      markTripLifecycleStatus(trip.tripType, trip.referenceId, 'completed');
      listingsShouldRefresh = true;
      listsShouldRefresh = true;
      return;
    }

    remainingActiveTrips.push(trip);
  });

  if (remainingActiveTrips.length !== userTrips.active.length) {
    userTrips.active = remainingActiveTrips;
    listsShouldRefresh = true;
  }

  if (listsShouldRefresh) {
    renderActiveTrips();
    renderCompletedTrips();
  }
  if (listingsShouldRefresh) {
    refreshPublicTrips();
    refreshVehicleTrips();
  }
}

function moveTripToCompleted(trip, reason = '') {
  const completedEntry = {
    ...trip,
    status: 'Completado',
    statusClass: 'status--success',
    completedAt: new Date().toISOString(),
    completionReason: reason || 'viaje finalizado'
  };
  completedEntry.participants = generateParticipantsForTrip(trip);
  userTrips.completed.unshift(completedEntry);
}

function generateParticipantsForTrip(trip = {}) {
  if (Array.isArray(trip.participants) && trip.participants.length) {
    return trip.participants;
  }

  const participants = [];
  const hostName = trip.organizer || trip.driver || 'Usuario Demo';

  participants.push({
    id: `${trip.referenceId || trip.id || Date.now()}_host`,
    name: hostName,
    role: 'Anfitrión',
    rating: trip.organizerRating || trip.driver_rating || 4.5,
    trips: trip.organizerTrips || trip.driver_trips || 0,
    avatar: trip.organizerAvatar || createAvatarFromName(hostName),
    userRating: null
  });

  const template = trip.participantsTemplate || [
    { id: 'p_a', name: 'Camila Díaz', rating: 4.7, trips: 32 },
    { id: 'p_b', name: 'Matías Pérez', rating: 4.5, trips: 24 }
  ];

  template.forEach((p, index) => {
    participants.push({
      id: `${trip.referenceId || trip.id || Date.now()}_p${index}`,
      name: p.name,
      role: 'Pasajero',
      rating: p.rating,
      trips: p.trips,
      avatar: p.avatar || createAvatarFromName(p.name),
      userRating: null
    });
  });

  return participants;
}

async function handlePublicTripSubmit(e) {
  e.preventDefault();
  if (!validateFormDateTime(e.target)) {
    return;
  }
  const formData = new FormData(e.target);

  const mode = formData.get('mode');
  const originValue = formData.get('origin');
  const destinationValue = formData.get('destination');
  const dateValue = formData.get('date') || new Date().toISOString().split('T')[0];
  const meetingPointValue = formData.get('meetingPoint');
  const lineValue = mode === 'Metro'
    ? formData.get('metroLine')
    : mode === 'Micro'
      ? formData.get('microLine')
      : '';
  const directionValue = (mode === 'Metro' || mode === 'Micro') ? formData.get('routeDirection') : '';
  const stationValue = (mode === 'Metro' || mode === 'Micro') ? originValue : '';
  
  const tripPayload = {
    creator: 'Usuario Demo',
    mode,
    line: lineValue || '',
    station: stationValue || '',
    origin: originValue,
    destination: destinationValue,
    direction: directionValue,
    time: formData.get('time'),
    meetingPoint: meetingPointValue,
    description: formData.get('description') || '',
    spots: 1,
    date: dateValue
  };

  let storedTrip = { ...tripPayload, id: Date.now() };
  let syncedWithBackend = false;

  if (backendAvailable) {
    try {
      const response = await apiPost('/public-trips', tripPayload);
      storedTrip = response?.data || response;
      if (!storedTrip.date) {
        storedTrip.date = tripPayload.date;
      }
      syncedWithBackend = true;
    } catch (error) {
      setBackendAvailability(false);
      console.error('Error guardando viaje público:', error);
      showNotification('Servidor no disponible, guardando viaje sólo localmente.', 'warning');
    }
  }

  if (syncedWithBackend) {
    await filterPublicTrips(publicTripsFilters.mode);
  } else {
    appData.publicTransportTrips.unshift(storedTrip);
    renderPublicTrips(appData.publicTransportTrips, {
      total: appData.publicTransportTrips.length,
      filters: { mode: publicTripsFilters.mode || null },
      generatedAt: new Date().toISOString()
    });
  }
  const userTripEntry = addTripToUserTrips(storedTrip, 'public', { isHost: true });
  if (userTripEntry) {
    persistUserTripEntry(userTripEntry);
  }
  
  e.target.reset();
  setDefaultDates(e.target);
  refreshTimeConstraints(e.target);

  const modeSelect = e.target.querySelector('[name="mode"]');
  if (modeSelect) {
    updatePublicTransportFields(modeSelect.value);
  }
  
  const tripsTab = document.querySelector('[data-tab="viajes-publicos"]');
  if (tripsTab) {
    switchTab(tripsTab, 'viajes-publicos');
  }
  
  showNotification('Viaje publicado exitosamente', 'success');
  registerActivity({
    icon: getTransportIcon(tripPayload.mode),
    title: `${storedTrip.creator || 'Usuario Demo'} publicó un viaje ${tripPayload.mode}`,
    description: `${storedTrip.origin} → ${storedTrip.destination}`
  });
  renderHomeStats();
}

async function handleVehicleTripSubmit(e) {
  e.preventDefault();
  if (!validateFormDateTime(e.target)) {
    return;
  }
  const formData = new FormData(e.target);
  const dateValue = formData.get('date') || new Date().toISOString().split('T')[0];

  if (!vehicleFormRouteData) {
    const calculated = await calculateVehicleFormRoute();
    if (!calculated) {
      showNotification('Necesitas calcular la ruta antes de publicar el viaje.', 'warning');
      return;
    }
  }
  
  const tripPayload = {
    driver: 'Usuario Demo',
    vehicle_type: formData.get('vehicleType'),
    origin: formData.get('origin'),
    destination: formData.get('destination'),
    departure_time: formData.get('time'),
    seats_available: parseInt(formData.get('seats'), 10) || 1,
    donation: parseInt(formData.get('donation'), 10) || 0,
    route: formData.get('route') || '',
    driver_rating: 4.5,
    day: dateValue,
    date: dateValue,
    routeGeoJSON: vehicleFormRouteData?.geometry || null,
    routeStart: vehicleFormRouteData?.origin || null,
    routeEnd: vehicleFormRouteData?.destination || null,
    routeDistance: vehicleFormRouteData?.distance || null,
    routeDuration: vehicleFormRouteData?.duration || null
  };

  let storedTrip = { ...tripPayload, id: Date.now() };
  let syncedWithBackend = false;

  if (backendAvailable) {
    try {
      const response = await apiPost('/vehicle-trips', tripPayload);
      storedTrip = response?.data || response;
      storedTrip.date = storedTrip.date || storedTrip.day || dateValue;
      if (typeof storedTrip.driver_rating === 'undefined') {
        storedTrip.driver_rating = 4.5;
      }
      syncedWithBackend = true;
    } catch (error) {
      setBackendAvailability(false);
      console.error('Error guardando viaje de vehículo:', error);
      showNotification('Servidor no disponible, guardando viaje sólo localmente.', 'warning');
    }
  }

  if (syncedWithBackend) {
    await filterVehicleTrips(vehicleTripsFilters.type);
  } else {
    appData.vehicleTrips.unshift(storedTrip);
    renderVehicleTrips(appData.vehicleTrips, {
      total: appData.vehicleTrips.length,
      filters: { type: vehicleTripsFilters.type || 'todos' },
      generatedAt: new Date().toISOString()
    });
  }
  const vehicleUserTrip = addTripToUserTrips(storedTrip, 'vehicle', { isHost: true });
  if (vehicleUserTrip) {
    persistUserTripEntry(vehicleUserTrip);
  }
  
  e.target.reset();
  setDefaultDates(e.target);
  vehicleFormRouteData = null;
  if (vehicleFormRouteLayer && vehicleFormMap) {
    vehicleFormMap.removeLayer(vehicleFormRouteLayer);
    vehicleFormRouteLayer = null;
  }
  Object.values(vehicleFormMarkers).forEach(marker => {
    if (marker && vehicleFormMap) vehicleFormMap.removeLayer(marker);
  });
  refreshTimeConstraints(e.target);
  
  const tripsTab = document.querySelector('[data-tab="viajes-vehiculo"]');
  if (tripsTab) {
    switchTab(tripsTab, 'viajes-vehiculo');
  }
  
  showNotification('Viaje de vehículo publicado exitosamente', 'success');
  registerActivity({
    icon: 'fas fa-car',
    title: `${storedTrip.driver || 'Usuario Demo'} ofrece viaje en ${storedTrip.vehicle_type || 'vehículo'}`,
    description: `${storedTrip.origin} → ${storedTrip.destination}`
  });
  renderHomeStats();
}

async function handleSafetyReportSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  
  const reportPayload = {
    type: formData.get('type'),
    location: formData.get('location'),
    time: formData.get('time') || '',
    description: formData.get('description'),
    severity: formData.get('severity'),
    anonymous: formData.get('anonymous') === 'on',
    date: new Date().toISOString().split('T')[0],
    votes: 0
  };

  let storedReport = { ...reportPayload, id: Date.now() };

  if (backendAvailable) {
    try {
      const response = await apiPost('/safety-reports', reportPayload);
      storedReport = response?.data || response;
      await filterSafetyReports();
    } catch (error) {
      setBackendAvailability(false);
      console.error('Error guardando reporte de seguridad:', error);
      showNotification('Servidor no disponible, guardando reporte sólo localmente.', 'warning');
    }
  }

  if (!backendAvailable) {
    appData.safetyReports.unshift(storedReport);
    safetyReportsMeta = {
      total: appData.safetyReports.length,
      filters: safetyReportsFilters,
      generatedAt: new Date().toISOString()
    };
    renderSafetyReports(safetyReportsMeta);
  }
  
  e.target.reset();
  
  const reportsTab = document.querySelector('[data-tab="reportes-rutas"]');
  if (reportsTab) {
    switchTab(reportsTab, 'reportes-rutas');
  }
  
  showNotification('Reporte de seguridad enviado', 'success');
  const severityLabel = reportPayload.severity === 'high'
    ? 'Riesgo alto'
    : reportPayload.severity === 'medium'
      ? 'Riesgo medio'
      : 'Riesgo bajo';
  registerActivity({
    icon: 'fas fa-shield-alt',
    title: 'Nuevo reporte de ruta',
    description: `${reportPayload.location} · ${severityLabel}`
  });
}


function openTripFeedbackModal(userTripId) {
  const modal = document.getElementById('tripFeedbackModal');
  if (!modal) return;
  const trip = findUserTripById(userTripId);
  if (!trip) {
    showNotification('No encontramos la información de este viaje.', 'error');
    return;
  }

  currentFeedbackTripId = userTripId;
  document.getElementById('feedbackTripId').value = userTripId;
  const ratingInput = document.getElementById('feedbackRating');
  if (ratingInput) {
    ratingInput.value = Math.round(trip.hostRating || 5);
    updateFeedbackRatingLabel();
  }
  const donationInput = document.getElementById('feedbackDonation');
  if (donationInput) {
    donationInput.value = typeof trip.donationAmount === 'number' && trip.donationAmount > 0
      ? Number(trip.donationAmount)
      : '';
  }
  const notesInput = document.getElementById('feedbackNotes');
  if (notesInput) {
    notesInput.value = trip.feedbackNotes || '';
  }
  const subtitle = document.getElementById('feedbackModalSubtitle');
  if (subtitle) {
    subtitle.textContent = `${trip.title || 'Tu viaje'} · ${formatTripDateTime(trip.date, trip.time)}`;
  }
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeTripFeedbackModal() {
  const modal = document.getElementById('tripFeedbackModal');
  if (modal) {
    modal.classList.add('hidden');
  }
  currentFeedbackTripId = null;
  const sideNav = document.getElementById('sideNav');
  if (!panicHistoryOpen && !(sideNav && sideNav.classList.contains('open'))) {
    document.body.style.overflow = '';
  }
}

function updateFeedbackRatingLabel() {
  const ratingInput = document.getElementById('feedbackRating');
  const ratingValueEl = document.getElementById('feedbackRatingValue');
  if (ratingInput && ratingValueEl) {
    ratingValueEl.textContent = ratingInput.value;
  }
}

async function handleTripFeedbackSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const tripId = form.userTripId.value || currentFeedbackTripId;
  if (!tripId) {
    showNotification('No encontramos el viaje a evaluar.', 'error');
    return;
  }
  const rating = Number(form.rating.value || 5);
  const donation = Number(form.donation.value || 0);
  const notes = form.notes.value?.trim() || '';

  const updates = {
    hostRating: rating,
    donationAmount: donation,
    donationConfirmed: donation > 0,
    feedbackNotes: notes,
    feedbackSubmittedAt: new Date().toISOString()
  };

  let synced = false;
  if (backendAvailable) {
    const updated = await updateUserTripRemote(tripId, updates);
    if (updated) {
      upsertUserTripEntry(updated);
      synced = true;
    }
  }

  if (!synced) {
    applyUserTripFeedbackLocal(tripId, updates);
  }

  form.reset();
  updateFeedbackRatingLabel();
  closeTripFeedbackModal();
  renderCompletedTrips();
  renderCommunityPulse();
  showNotification('Gracias por compartir tu experiencia.', 'success');
}

function applyUserTripFeedbackLocal(tripId, updates = {}) {
  if (!tripId) return null;
  const buckets = [userTrips.active, userTrips.completed];
  for (const list of buckets) {
    const entry = list.find(item => item.id === tripId);
    if (entry) {
      Object.assign(entry, updates);
      return entry;
    }
  }
  return null;
}

function findUserTripById(tripId) {
  if (!tripId) return null;
  return userTrips.active.find(item => item.id === tripId)
    || userTrips.completed.find(item => item.id === tripId)
    || null;
}

function renderPublicTrips(trips = appData.publicTransportTrips, metaOverride = null) {
  updatePublicTripsSummary(metaOverride || publicTripsMeta);
  const container = document.getElementById('publicTrips');
  if (!container) return;

  const visibleTrips = trips.filter(trip => !shouldHideTripFromListings(trip));
  if (!visibleTrips.length) {
    container.innerHTML = '<p class="trip-empty">No hay viajes disponibles en este momento.</p>';
    return;
  }

  container.innerHTML = visibleTrips.map(buildPublicTripCard).join('');
}

function buildPublicTripCard(trip) {
  const modeLabel = getModeClassName(trip.mode);
  const lineLabel = trip.line || trip.mode || 'Viaje';
  const meetingPoint = trip.meetingPoint || trip.meeting_point || '';
  const description = trip.description || trip.trip_description || '';
  const directionInfo = trip.direction ? `<p class="trip-direction">Dirección: ${trip.direction}</p>` : '';
  const meetingInfo = meetingPoint ? `<p class="trip-meeting"><strong>Encuentro:</strong> ${meetingPoint}</p>` : '';
  const descriptionInfo = description ? `<p class="trip-description">${description}</p>` : '';
  const dateInfo = trip.date ? `<span class="trip-date">${formatDate(trip.date)}</span>` : '';

  return `
    <div class="trip-card card">
      <div class="card__body">
        <div class="trip-header">
          <span class="trip-mode ${modeLabel}">${lineLabel}</span>
          <span class="trip-time">${trip.time || ''}</span>
        </div>
        <div class="trip-route">
          <p><strong>${trip.origin} → ${trip.destination}</strong></p>
          ${directionInfo}
          ${meetingInfo}
          ${descriptionInfo}
          <p class="trip-creator">Creado por ${trip.creator || 'Usuario Demo'}</p>
        </div>
        <div class="trip-info">
          ${dateInfo}
          <button class="btn btn--primary btn--sm" onclick="joinTrip(${trip.id}, 'public')">Unirse</button>
        </div>
      </div>
    </div>
  `;
}

function renderVehicleTrips(trips = appData.vehicleTrips) {
  const container = document.getElementById('vehicleTrips');
  if (!container) return;

  const visibleTrips = trips.filter(trip => !shouldHideTripFromListings(trip));
  if (!visibleTrips.length) {
    container.innerHTML = '<p class="trip-empty">No hay viajes en vehículo disponibles.</p>';
    return;
  }

  container.innerHTML = visibleTrips.map(trip => `
    <div class="vehicle-trip-card card">
      <div class="card__body">
        <div class="driver-info">
          <div class="driver-avatar">
            <i class="fas fa-user"></i>
          </div>
          <div class="driver-details">
            <h4>${trip.driver}</h4>
            <div class="rating">
              <span>${trip.driver_rating ? `${Number(trip.driver_rating).toFixed(1)} ★` : '—'}</span>
              <span>${trip.driver_trips ? `${trip.driver_trips} viajes` : ''}</span>
            </div>
            <span class="vehicle-type">${trip.vehicle_type === 'Automóvil' ? '🚗' : '🏍️'} ${trip.vehicle_type}</span>
          </div>
        </div>
        <div class="trip-details">
          <div class="route">
            <p><strong>${trip.origin} → ${trip.destination}</strong></p>
            <p class="route-desc">${trip.route}</p>
        </div>
        <div class="trip-meta">
          <span class="time">${trip.departure_time}</span>
          <span class="seats">${trip.seats_available} asientos</span>
          <span class="donation">$${trip.donation.toLocaleString()} donación</span>
        </div>
      </div>
        <button class="btn btn--primary btn--full-width" onclick="viewVehicleTrip(${trip.id})">Ver viaje</button>
      </div>
    </div>
  `).join('');
}

function renderActiveTrips() {
  const container = document.getElementById('activeTripsList');
  if (!container) return;

  if (!userTrips.active.length) {
    container.innerHTML = '<p class="trip-empty">Aún no te has unido a viajes.</p>';
    return;
  }

  container.innerHTML = userTrips.active.map(trip => {
    const hostBadge = trip.isHost ? '<span class="host-badge">Anfitrión</span>' : '';
    const startButton = trip.isHost && !trip.hasStarted
      ? `<button class="btn btn--primary btn--sm" onclick="startHostedTrip('${trip.id}')">Dar inicio al viaje</button>`
      : '';
    const finishButton = trip.isHost && trip.hasStarted
      ? `<button class="btn btn--secondary btn--sm" onclick="finishHostedTrip('${trip.id}')">Dar fin al viaje</button>`
      : '';

    const hostActions = trip.isHost && (startButton || finishButton)
      ? `<div class="trip-host-actions">${startButton}${finishButton}</div>`
      : '';

    const organizerStats = (trip.isHost && trip.organizerRating)
      ? `<p class="organizer-rating">${Number(trip.organizerRating).toFixed(1)} ★ · ${trip.organizerTrips || 0} viajes</p>`
      : '';
    const feedbackCta = trip.hostRating
      ? `<span class="trip-note">Calificado ${Number(trip.hostRating).toFixed(1)} ★</span>`
      : `<button class="btn btn--primary btn--sm" onclick="openTripFeedbackModal('${trip.id}')">Calificar viaje</button>`;
    const donationChip = typeof trip.donationAmount === 'number' && trip.donationAmount > 0
      ? `<span class="donation-chip">$${Number(trip.donationAmount).toLocaleString('es-CL')} entregados</span>`
      : '';

    return `
      <div class="my-trip-card card">
        <div class="card__body">
          <div class="trip-status-row">
            <div class="trip-status ${trip.statusClass || 'status--info'}">${trip.status || 'Confirmado'}</div>
            ${hostBadge}
          </div>
          <h4>${trip.title}</h4>
          <p class="trip-time">${formatTripDateTime(trip.date, trip.time)}</p>
          <div class="trip-companions">
            <p><strong>${trip.organizerLabel || 'Organizador'}:</strong> ${trip.organizer || 'Usuario Demo'}</p>
            ${organizerStats}
          </div>
          ${hostActions}
          <div class="trip-actions">
            <button class="btn btn--secondary btn--sm" onclick="openTripChat('${trip.id}')">Chat</button>
            <button class="btn btn--outline btn--sm" onclick="viewUserTripDetail('${trip.id}')">Detalles</button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function renderCompletedTrips() {
  const container = document.getElementById('completedTripsList');
  if (!container) return;

  if (!userTrips.completed.length) {
    container.innerHTML = '<p class="trip-empty">Aún no tienes viajes terminados.</p>';
    return;
  }

  container.innerHTML = userTrips.completed.map(trip => {
    const organizerStats = trip.organizerRating
      ? `<p class="organizer-rating">${Number(trip.organizerRating).toFixed(1)} ★ · ${trip.organizerTrips || 0} viajes</p>`
      : '';
    const feedbackCta = trip.hostRating
      ? `<span class="trip-note">Calificado ${Number(trip.hostRating).toFixed(1)} ★</span>`
      : `<button class="btn btn--primary btn--sm" onclick="openTripFeedbackModal('${trip.id}')">Calificar viaje</button>`;
    const donationChip = typeof trip.donationAmount === 'number' && trip.donationAmount > 0
      ? `<span class="donation-chip">$${Number(trip.donationAmount).toLocaleString('es-CL')} entregados</span>`
      : '';

    return `
      <div class="completed-trip-card card">
        <div class="card__body">
          <div class="trip-status ${trip.statusClass || 'status--success'}">${trip.status || 'Completado'}</div>
          <h4>${trip.title}</h4>
          <p class="trip-time">${formatTripDateTime(trip.date, trip.time)}</p>
          <div class="trip-companions">
            <p><strong>${trip.organizerLabel || 'Organizador'}:</strong> ${trip.organizer || 'Usuario Demo'}</p>
            ${organizerStats}
          </div>
          <div class="trip-actions">
            <button class="btn btn--outline btn--sm" onclick="viewUserTripDetail('${trip.id}', 'completed')">Detalles</button>
            ${feedbackCta}
          </div>
          ${donationChip}
          <small class="trip-note">${trip.completionReason || 'Viaje finalizado'}</small>
        </div>
      </div>
    `;
  }).join('');
}


function renderSafetyReports(metaOverride = null) {
  updateSafetyReportsSummary(metaOverride || safetyReportsMeta);
  const container = document.querySelector('.safety-reports');
  if (!container) return;

  const reports = (appData.safetyReports || []).slice().sort((a, b) => {
    const weightDiff = getSeverityWeight(b.severity) - getSeverityWeight(a.severity);
    if (weightDiff !== 0) return weightDiff;
    const dateA = `${a.date || ''}T${a.time || '00:00'}`;
    const dateB = `${b.date || ''}T${b.time || '00:00'}`;
    return dateB.localeCompare(dateA);
  });

  if (!reports.length) {
    container.innerHTML = '<p class="trip-empty">Aún no hay reportes registrados.</p>';
    renderSafetyReportsInsights([]);
    return;
  }

  renderSafetyReportsInsights(reports);

  container.innerHTML = reports.map(report => {
    const key = String(report.id);
    const voteValue = userReportVotes[key] || 0;
    const votePending = Boolean(reportVoteInFlight[key]);
    const typeInfo = getReportTypeInfo(report.type);
    const severityInfo = getSeverityInfo(report.severity);
    const voteCount = typeof report.votes === 'number' ? report.votes : 0;
    const reportDateLabel = report.date ? formatDate(report.date) : 'Fecha no disponible';
    const relativeSource = report.date ? `${report.date}T${report.time || '00:00'}` : null;
    const relativeLabel = relativeSource ? formatRelativeTime(relativeSource) : '';
    const timeBadge = report.time ? `<span><i class="fas fa-clock"></i>${report.time}</span>` : '';
    return `
    <article class="safety-report-card card" data-report-id="${report.id}">
      <div class="card__body">
        <div class="report-header">
          <div class="report-type">
            <i class="${typeInfo.icon}"></i>
            <span>${typeInfo.label}</span>
          </div>
          <span class="severity-badge ${severityInfo.className}">${severityInfo.label}</span>
        </div>
        <div class="report-meta">
          <span><i class="fas fa-map-marker-alt"></i>${report.location || 'Ubicación no especificada'}</span>
          ${timeBadge}
          <span><i class="fas fa-calendar-day"></i>${reportDateLabel}</span>
          ${relativeLabel ? `<span><i class="fas fa-clock-rotate-left"></i>${relativeLabel}</span>` : ''}
        </div>
        <p class="report-description">${report.description || 'Sin descripción disponible'}</p>
        <div class="report-tags">
          <span class="report-chip">${voteCount} votos</span>
          ${report.anonymous ? '<span class="report-chip ghost">Anónimo</span>' : ''}
          ${normalizeText(report.type) === 'safe_route' ? '<span class="report-chip success">Ruta segura</span>' : ''}
        </div>
        <div class="vote-controls">
          <button type="button" class="btn btn--outline btn--sm ${voteValue === 1 ? 'active' : ''}" onclick="voteReport('${report.id}', 1)" ${votePending ? 'disabled' : ''} aria-pressed="${voteValue === 1}">
            <i class="fas fa-thumbs-up"></i>
          </button>
          <span class="vote-count" id="reportVotes-${report.id}">${voteCount}</span>
          <button type="button" class="btn btn--outline btn--sm ${voteValue === -1 ? 'active' : ''}" onclick="voteReport('${report.id}', -1)" ${votePending ? 'disabled' : ''} aria-pressed="${voteValue === -1}">
            <i class="fas fa-thumbs-down"></i>
          </button>
        </div>
      </div>
    </article>
  `;
  }).join('');
}

function renderSafetyReportsInsights(reports = []) {
  const insightsEl = document.getElementById('safetyReportsInsights');
  if (!insightsEl) return;
  if (!reports.length) {
    insightsEl.innerHTML = '<p class="insight-empty">Aún no hay datos para analizar.</p>';
    return;
  }

  const stats = computeSafetyReportStats(reports);
  const topTypeEntry = Object.entries(stats.type).sort((a, b) => b[1] - a[1])[0] || ['default', 0];
  const topType = getReportTypeInfo(topTypeEntry[0]).label;

  insightsEl.innerHTML = `
    <div class="report-insight-card">
      <span class="report-insight-value">${stats.total}</span>
      <span class="report-insight-label">Reportes activos</span>
    </div>
    <div class="report-insight-card emphasis">
      <span class="report-insight-value">${stats.severity.high}</span>
      <span class="report-insight-label">Riesgo alto</span>
    </div>
    <div class="report-insight-card success">
      <span class="report-insight-value">${topType}</span>
      <span class="report-insight-label">Tipo más frecuente</span>
    </div>
  `;
}

function computeSafetyReportStats(reports = []) {
  const stats = {
    total: reports.length,
    severity: { high: 0, medium: 0, low: 0 },
    type: {}
  };

  reports.forEach(report => {
    const severity = normalizeText(report.severity) || 'low';
    if (typeof stats.severity[severity] === 'number') {
      stats.severity[severity] += 1;
    }
    const typeKey = normalizeText(report.type) || 'default';
    stats.type[typeKey] = (stats.type[typeKey] || 0) + 1;
  });

  return stats;
}

function getReportTypeInfo(type = '') {
  const normalized = normalizeText(type);
  return SAFETY_REPORT_TYPE_INFO[normalized] || SAFETY_REPORT_TYPE_INFO.default;
}

function getSeverityInfo(level = 'low') {
  const normalized = normalizeText(level);
  return SEVERITY_INFO[normalized] || SEVERITY_INFO.low;
}

function getSeverityWeight(level = 'low') {
  const info = getSeverityInfo(level);
  return info.weight || 0;
}


function renderRecentActivity() {
  const container = document.getElementById('recentActivityList');
  if (!container) return;

  const activities = Array.isArray(appData.recentActivity) ? appData.recentActivity.slice(0, 5) : [];

  if (!activities.length) {
    container.innerHTML = '<p class="activity-empty">Sin actividad reciente.</p>';
    return;
  }

  container.innerHTML = activities.map(activity => `
    <div class="activity-item">
      <i class="${activity.icon || 'fas fa-bell'}"></i>
      <div>
        <p><strong>${activity.title}</strong>${activity.description ? ` - ${activity.description}` : ''}</p>
        <small>${formatRelativeTime(activity.timestamp)}</small>
      </div>
    </div>
  `).join('');
}

function viewVehicleTrip(tripId) {
  const trip = appData.vehicleTrips.find(item => String(item.id) === String(tripId));
  if (!trip) {
    showNotification('No encontramos la información del viaje.', 'error');
    return;
  }
  openTripDetailModal(trip, 'listing');
}

function viewUserTripDetail(userTripId, contextOverride = null) {
  let trip = userTrips.active.find(item => item.id === userTripId);
  let context = contextOverride || 'my-trip';

  if (!trip) {
    trip = userTrips.completed.find(item => item.id === userTripId);
    if (trip) {
      context = contextOverride || 'completed';
    }
  }

  if (!trip) {
    showNotification('No pudimos cargar los detalles del viaje.', 'error');
    return;
  }
  openTripDetailModal(trip, context);
}

async function openTripChat(tripId) {
  const trip = userTrips.active.find(item => item.id === tripId);
  if (!trip) {
    showNotification('Sólo puedes abrir el chat de viajes activos.', 'warning');
    return;
  }

  if (!trip.participants) {
    trip.participants = generateParticipantsForTrip(trip);
  }

  currentChatTrip = trip;
  trip.chatThreadId = trip.chatThreadId || trip.referenceId || trip.id;
  setChatSyncState({ status: backendAvailable ? 'idle' : 'offline', error: null });
  updateChatRefreshButton();
  navigateToSection('chat');
  await loadChatHistory(trip, { force: true });
  renderChatView();
  startChatPolling(trip);
}

async function loadChatHistory(trip, options = {}) {
  if (!trip) return;
  const remoteTripId = trip.chatThreadId || trip.referenceId || trip.id;
  const forceRefresh = Boolean(options.force);

  if (chatMessagesCache[remoteTripId] && !forceRefresh) {
    trip.messages = chatMessagesCache[remoteTripId];
    return;
  }

  if (!backendAvailable) {
    if (!trip.messages) {
      trip.messages = generateChatMessages(trip);
    }
    setChatSyncState({ status: 'offline' });
    return;
  }

  try {
    setChatLoading(true);
    setChatSyncState({ status: 'syncing', error: null });
    const response = await fetchTripChat(remoteTripId);
    const messages = extractArrayResponse(response).map(message => mapChatMessageToClient(message));
    if (messages.length) {
      chatMessagesCache[remoteTripId] = messages;
      trip.messages = messages;
    } else if (!trip.messages) {
      trip.messages = generateChatMessages(trip);
    }
    setChatSyncState({ status: 'updated', updatedAt: new Date().toISOString(), error: null });
  } catch (error) {
    console.warn('No se pudo sincronizar el chat:', error);
    if (!trip.messages) {
      trip.messages = generateChatMessages(trip);
    }
    setChatSyncState({ status: 'error', error: error.message || 'Sin conexión' });
    showNotification('No pudimos cargar el chat, mostrando mensajes locales.', 'warning');
  } finally {
    setChatLoading(false);
  }
}


function renderChatView() {
  const trip = currentChatTrip;
  const titleEl = document.getElementById('chatTripTitle');
  const subtitleEl = document.getElementById('chatTripSubtitle');
  const listEl = document.getElementById('chatMessageList');
  const participantsEl = document.getElementById('chatParticipantsList');

  if (!trip || !titleEl || !subtitleEl || !listEl || !participantsEl) {
    return;
  }

  titleEl.textContent = trip.title || 'Chat del viaje';
  const routeLabel = [trip.origin, trip.destination].filter(Boolean).join(' -> ');
  subtitleEl.textContent = routeLabel || 'Conversación activa';

  if (chatLoading) {
    listEl.innerHTML = '<p class="activity-empty">Cargando mensajes...</p>';
  } else if (!trip.messages || !trip.messages.length) {
    listEl.innerHTML = '<p class="activity-empty">Aún no hay mensajes.</p>';
  } else {
    listEl.innerHTML = trip.messages.map(message => {
      const statusText = getChatMessageStatusLabel(message.status);
      const statusClass = message.status && message.status !== 'sent' ? ` ${message.status}` : '';
      return `
      <div class="chat-message ${message.mine ? 'mine' : ''}${statusClass}">
        <div class="chat-message-header">
          <img src="${message.avatar || createAvatarFromName(message.sender)}" alt="${message.sender}">
          <div>
            <h5>${message.sender}</h5>
            <small>${formatRelativeTime(message.timestamp)}</small>
          </div>
        </div>
        <p class="chat-message-body">${message.text}</p>
        ${statusText ? `<span class="chat-message-status ${message.status === 'error' ? 'error' : ''}">${statusText}</span>` : ''}
      </div>
    `;
    }).join('');
  }

  renderChatParticipants(trip);
  scrollChatToBottom();
}

function renderChatParticipants(trip) {
  const participantsEl = document.getElementById('chatParticipantsList');
  if (!participantsEl) return;

  if (!trip.participants || !trip.participants.length) {
    participantsEl.innerHTML = '<p class="activity-empty">Sin participantes registrados.</p>';
    return;
  }

  participantsEl.innerHTML = trip.participants.map(participant => `
    <div class="participant-pill">
      <img src="${participant.avatar || createAvatarFromName(participant.name)}" alt="${participant.name}">
      <div class="participant-pill-content">
        <h5>${participant.name}</h5>
        <small>${participant.role || 'Compañero'}${participant.rating ? ` · ${Number(participant.rating).toFixed(1)}★` : ''}</small>
      </div>
      ${participant.trips ? `<span class="participant-chip">${participant.trips} viajes</span>` : ''}
    </div>
  `).join('');
}

function startChatPolling(trip = currentChatTrip) {
  stopChatPolling();
  if (!trip || !backendAvailable) return;
  chatPollingIntervalId = setInterval(() => {
    if (document.hidden || currentSection !== 'chat' || chatLoading) {
      return;
    }
    refreshChatMessages({ silent: true });
  }, CHAT_POLLING_INTERVAL_MS);
}

function stopChatPolling() {
  if (chatPollingIntervalId) {
    clearInterval(chatPollingIntervalId);
    chatPollingIntervalId = null;
  }
}

async function refreshChatMessages(options = {}) {
  if (!currentChatTrip) return;
  if (!backendAvailable) {
    if (!options.silent) {
      showNotification('Servidor no disponible, el chat está en modo offline.', 'warning');
      setChatSyncState({ status: 'offline' });
    }
    return;
  }
  if (chatLoading) return;
  await loadChatHistory(currentChatTrip, { force: true });
  renderChatView();
  if (!options.silent) {
    showNotification('Chat actualizado', 'success');
  }
}

function setChatSyncState(patch = {}) {
  chatSyncState = { ...chatSyncState, ...patch };
  renderChatStatus();
}

function renderChatStatus() {
  const pill = document.getElementById('chatStatusPill');
  if (!pill) return;
  const status = chatSyncState.status || 'idle';
  pill.className = `chat-status is-${status}`;
  const textEl = document.getElementById('chatStatusText');
  const timeEl = document.getElementById('chatStatusTime');
  if (textEl) {
    textEl.textContent = getChatStatusMessage(status, chatSyncState.error);
  }
  if (timeEl) {
    const label = chatSyncState.updatedAt
      ? `Última sincronización: ${formatRelativeTime(chatSyncState.updatedAt)}`
      : 'Última sincronización: nunca';
    timeEl.textContent = label;
  }
  updateChatRefreshButton();
}

function getChatStatusMessage(status, error) {
  switch (status) {
    case 'syncing':
      return 'Sincronizando mensajes...';
    case 'updated':
      return 'Chat actualizado';
    case 'error':
      return error ? `Error: ${error}` : 'Error al sincronizar';
    case 'offline':
      return 'Modo sin conexión';
    default:
      return 'Selecciona un viaje para cargar el chat';
  }
}

function updateChatRefreshButton() {
  const refreshBtn = document.getElementById('chatRefreshBtn');
  if (!refreshBtn) return;
  const disabled = !currentChatTrip || chatLoading;
  refreshBtn.disabled = disabled;
  refreshBtn.classList.toggle('is-loading', chatLoading);
}

function getChatMessageStatusLabel(status) {
  if (status === 'pending') return 'Enviando...';
  if (status === 'error') return 'No entregado';
  if (status === 'local') return 'Guardado localmente';
  return '';
}


async function handleChatMessageSubmit() {
  if (!currentChatTrip) {
    showNotification('No hay un chat activo.', 'warning');
    return;
  }
  const input = document.getElementById('chatMessageInput');
  if (!input || !input.value.trim()) return;

  const user = appData.users?.[0];
  const form = document.getElementById('chatMessageForm');
  const submitBtn = form?.querySelector('button[type="submit"]');
  const remoteTripId = currentChatTrip.chatThreadId || currentChatTrip.referenceId || currentChatTrip.id;
  const baseMessage = {
    id: `msg_${Date.now()}`,
    sender: user?.name || 'Usuario',
    avatar: user?.photo || createAvatarFromName(user?.name || 'Usuario'),
    text: input.value.trim(),
    timestamp: new Date().toISOString(),
    mine: true,
    status: backendAvailable ? 'pending' : 'local'
  };

  currentChatTrip.messages = currentChatTrip.messages || [];
  currentChatTrip.messages.push(baseMessage);
  chatMessagesCache[remoteTripId] = currentChatTrip.messages.slice();
  if (submitBtn) submitBtn.disabled = true;
  input.disabled = true;
  input.value = '';
  renderChatView();

  if (!backendAvailable) {
    showNotification('Mensaje guardado localmente. Cuando el servidor vuelva intentaremos enviarlo.', 'warning');
    input.disabled = false;
    if (submitBtn) submitBtn.disabled = false;
    return;
  }

  try {
    const response = await postTripChatMessage(remoteTripId, {
      senderId: user?.id || 'demo-user',
      senderName: user?.name || 'Usuario',
      text: baseMessage.text,
      avatar: baseMessage.avatar
    });
    if (response?.data) {
      const mapped = mapChatMessageToClient(response.data);
      const index = currentChatTrip.messages.findIndex(msg => msg.id === baseMessage.id);
      if (index !== -1) {
        currentChatTrip.messages[index] = { ...mapped, mine: true, status: 'sent' };
      }
      chatMessagesCache[remoteTripId] = currentChatTrip.messages.slice();
      setChatSyncState({ status: 'updated', updatedAt: new Date().toISOString(), error: null });
      renderChatView();
    }
  } catch (error) {
    setBackendAvailability(false);
    console.warn('No se pudo enviar el mensaje al servidor:', error);
    const index = currentChatTrip.messages.findIndex(msg => msg.id === baseMessage.id);
    if (index !== -1) {
      currentChatTrip.messages[index] = { ...currentChatTrip.messages[index], status: 'error' };
    }
    chatMessagesCache[remoteTripId] = currentChatTrip.messages.slice();
    setChatSyncState({ status: 'error', error: error.message || 'Sin conexión' });
    showNotification('El mensaje se guardó sólo localmente.', 'warning');
    renderChatView();
  } finally {
    input.disabled = false;
    if (submitBtn) submitBtn.disabled = false;
  }
}

function scrollChatToBottom() {
  const listEl = document.getElementById('chatMessageList');
  if (!listEl) return;
  listEl.scrollTop = listEl.scrollHeight;
}

function generateChatMessages(trip) {
  const user = appData.users?.[0];
  const host = trip.organizer || trip.driver || user?.name || 'Anfitrión';
  const hostAvatar = trip.organizerAvatar || createAvatarFromName(host);
  const participants = generateParticipantsForTrip(trip);
  const firstPassenger = participants.find(p => p.role !== 'Anfitrión');

  return [
    {
      id: `msg_${trip.id}_1`,
      sender: host,
      avatar: hostAvatar,
      text: 'Hola a todos, gracias por unirse. Nos reunimos en el punto acordado 5 minutos antes.',
      timestamp: new Date(Date.now() - 30 * 60 * 1000).toISOString(),
      mine: Boolean(trip.isHost),
      status: 'sent'
    },
    firstPassenger ? {
      id: `msg_${trip.id}_2`,
      sender: firstPassenger.name,
      avatar: firstPassenger.avatar || createAvatarFromName(firstPassenger.name),
      text: '¡Perfecto! Llegaré 10 minutos antes.',
      timestamp: new Date(Date.now() - 25 * 60 * 1000).toISOString(),
      mine: false,
      status: 'sent'
    } : null
  ].filter(Boolean);
}

function mapChatMessageToClient(message = {}) {
  const user = appData.users?.[0];
  const currentUserId = user?.id ? String(user.id) : '';
  const senderId = message.senderId ? String(message.senderId) : '';
  const senderName = message.senderName || message.sender || 'Usuario';
  return {
    id: message.id || `msg_${Date.now()}`,
    sender: senderName,
    avatar: message.avatar || createAvatarFromName(senderName),
    text: message.text || '',
    timestamp: message.timestamp || new Date().toISOString(),
    mine: currentUserId ? senderId === currentUserId : senderName === user?.name,
    status: message.status || 'sent'
  };
}

async function openTripDetailModal(trip, context) {
  try {
    initializeMaps();
    currentDetailContext = {
      context,
      tripType: context === 'listing' ? 'vehicle' : trip.tripType,
      trip
    };
    pendingPickupPoint = null;
    currentCompletedTrip = context === 'completed' ? trip : null;

    const modal = document.getElementById('tripDetailModal');
    if (!modal) return;
    modal.classList.remove('hidden');

    const titleEl = document.getElementById('tripDetailTitle');
    const subtitleEl = document.getElementById('tripDetailSubtitle');
    const driverEl = document.getElementById('tripDetailDriver');
    const vehicleEl = document.getElementById('tripDetailVehicle');
    const scheduleEl = document.getElementById('tripDetailSchedule');
    const descriptionEl = document.getElementById('tripDetailDescription');
    const meetingEl = document.getElementById('tripDetailMeeting');
    const joinBtn = document.getElementById('tripDetailJoinBtn');
    const pickupEl = document.getElementById('pickupInstruction');
    const participantsSection = document.getElementById('tripParticipantsSection');
    const participantsList = document.getElementById('tripDetailParticipants');

    const tripTitle = trip.title || `${trip.vehicle_type || 'Vehículo'} · ${trip.origin} → ${trip.destination}`;
    titleEl.textContent = tripTitle;
    subtitleEl.textContent = `${trip.origin} → ${trip.destination}`;
    const ratingValue = trip.driver_rating || trip.organizerRating || trip.rating;
    const driverName = trip.driver || trip.organizer || 'Usuario Demo';
    driverEl.textContent = ratingValue
      ? `${driverName} (${Number(ratingValue).toFixed(1)}★)`
      : driverName;
    vehicleEl.textContent = trip.vehicle_type || trip.vehicleType || trip.organizerLabel || '—';
    scheduleEl.textContent = formatTripDateTime(getTripDateValue(trip), getTripTimeValue(trip));
    descriptionEl.textContent = trip.description || trip.tripDescription || 'Sin descripción';
    meetingEl.textContent = trip.meetingPoint || trip.meeting_point || 'Por definir';

    if (context === 'listing') {
      joinBtn.style.display = 'inline-flex';
      pickupEl.textContent = 'Haz click en el mapa para elegir tu punto de recogida.';
    } else {
      joinBtn.style.display = 'none';
      pickupEl.textContent = trip.pickupPoint
        ? `Punto de recogida: ${trip.pickupPoint.label || `${trip.pickupPoint.lat.toFixed(4)}, ${trip.pickupPoint.lng.toFixed(4)}`}`
        : 'No registraste un punto de recogida.';
    }

    await renderTripOnDetailMap(trip, context === 'listing');
    renderTripParticipants(trip, context, participantsSection, participantsList);

    setTimeout(() => {
      if (detailMap) detailMap.invalidateSize();
    }, 200);
  } catch (error) {
    console.error('Error mostrando detalle de viaje:', error);
    showNotification('No pudimos mostrar el mapa del viaje.', 'error');
  }
}

function closeTripDetailModal() {
  const modal = document.getElementById('tripDetailModal');
  if (modal) {
    modal.classList.add('hidden');
  }
  enablePickupSelection(false);
  if (detailPickupMarker && detailMap) {
    detailMap.removeLayer(detailPickupMarker);
    detailPickupMarker = null;
  }
  pendingPickupPoint = null;
  currentDetailContext = null;
  currentCompletedTrip = null;
}

async function renderTripOnDetailMap(trip, allowPickup) {
  if (!detailMap) {
    initializeMaps();
  }
  if (!detailMap) return;

  if (detailRouteLayer) {
    detailMap.removeLayer(detailRouteLayer);
    detailRouteLayer = null;
  }
  if (detailPickupMarker) {
    detailMap.removeLayer(detailPickupMarker);
    detailPickupMarker = null;
  }

  const routeData = await loadRouteForTrip(trip);
  if (!routeData) {
    showNotification('No se pudo cargar la ruta.', 'warning');
    return;
  }

  const startMarker = createMarker([routeData.origin.lat, routeData.origin.lng]);
  const endMarker = createMarker([routeData.destination.lat, routeData.destination.lng]);
  detailRouteLayer = drawRoute(detailMap, routeData.geometry, [startMarker, endMarker]);
  markMapReady('tripDetailMap');

  const pickupEl = document.getElementById('pickupInstruction');
  const routeSummaryParts = [];
  if (routeData.distance) {
    routeSummaryParts.push(`${(routeData.distance / 1000).toFixed(1)} km`);
  }
  if (routeData.duration) {
    routeSummaryParts.push(`${Math.round(routeData.duration / 60)} min`);
  }

  if (allowPickup) {
    enablePickupSelection(true);
    if (pickupEl) {
      pickupEl.textContent = `Haz click en el mapa para elegir tu punto de recogida${routeSummaryParts.length ? ` · ${routeSummaryParts.join(' · ')}` : ''}.`;
    }
  } else {
    enablePickupSelection(false);
    if (trip.pickupPoint) {
      detailPickupMarker = createMarker([trip.pickupPoint.lat, trip.pickupPoint.lng]);
      if (detailPickupMarker) detailPickupMarker.addTo(detailMap);
      if (pickupEl) {
        pickupEl.textContent = `Punto de recogida: ${trip.pickupPoint.label || `${trip.pickupPoint.lat.toFixed(4)}, ${trip.pickupPoint.lng.toFixed(4)}`}`;
      }
    } else if (pickupEl) {
      pickupEl.textContent = routeSummaryParts.length
        ? `Ruta estimada ${routeSummaryParts.join(' · ')}`
        : 'No registraste un punto de recogida.';
    }
  }
}

async function loadRouteForTrip(trip) {
  if (trip.routeGeoJSON && trip.routeStart && trip.routeEnd) {
    return {
      geometry: trip.routeGeoJSON,
      origin: trip.routeStart,
      destination: trip.routeEnd,
      distance: trip.routeDistance,
      duration: trip.routeDuration
    };
  }

  const [originCoords, destCoords] = await Promise.all([
    geocodeAddress(trip.origin),
    geocodeAddress(trip.destination)
  ]);
  const routeData = await fetchRouteBetween(originCoords, destCoords, 'driving');
  trip.routeGeoJSON = routeData.geometry;
  trip.routeStart = originCoords;
  trip.routeEnd = destCoords;
  trip.routeDistance = routeData.distance;
  trip.routeDuration = routeData.duration;

  return {
    geometry: routeData.geometry,
    origin: originCoords,
    destination: destCoords,
    distance: routeData.distance,
    duration: routeData.duration
  };
}

function enablePickupSelection(enable) {
  if (!detailMap) return;
  if (detailPickupListener) {
    detailMap.off('click', detailPickupListener);
    detailPickupListener = null;
  }
  if (enable) {
    detailPickupListener = function(e) {
      setPickupPoint(e.latlng);
    };
    detailMap.on('click', detailPickupListener);
  }
}

function setPickupPoint(latlng) {
  pendingPickupPoint = {
    lat: latlng.lat,
    lng: latlng.lng,
    label: `(${latlng.lat.toFixed(4)}, ${latlng.lng.toFixed(4)})`
  };
  if (detailPickupMarker && detailMap) {
    detailMap.removeLayer(detailPickupMarker);
  }
  detailPickupMarker = createMarker(latlng);
  if (detailPickupMarker && detailMap) {
    detailPickupMarker.addTo(detailMap);
  }
  const pickupEl = document.getElementById('pickupInstruction');
  if (pickupEl) {
    pickupEl.textContent = `Punto de recogida seleccionado: ${pendingPickupPoint.label}`;
  }
}

function handleJoinFromDetail() {
  if (!currentDetailContext || currentDetailContext.context !== 'listing') {
    closeTripDetailModal();
    return;
  }
  if (!pendingPickupPoint) {
    showNotification('Selecciona un punto de recogida en el mapa.', 'warning');
    return;
  }
  const trip = currentDetailContext.trip;
  const result = joinTrip(trip.id, 'vehicle', { pickupPoint: pendingPickupPoint });
  if (result) {
    closeTripDetailModal();
  }
}

function renderTripParticipants(trip, context, sectionEl, listEl) {
  sectionEl = sectionEl || document.getElementById('tripParticipantsSection');
  listEl = listEl || document.getElementById('tripDetailParticipants');
  if (!sectionEl || !listEl) return;

  if (context !== 'completed') {
    sectionEl.classList.add('hidden');
    listEl.innerHTML = '';
    return;
  }

  sectionEl.classList.remove('hidden');
  const participants = trip.participants || generateParticipantsForTrip(trip);
  trip.participants = participants;

  if (!participants.length) {
    listEl.innerHTML = '<p class="activity-empty">Este viaje no tiene participantes registrados.</p>';
    return;
  }

  listEl.innerHTML = participants.map(participant => {
    const badge = participant.role === 'Anfitrión'
      ? '<span class="badge badge--host">Anfitrión</span>'
      : '';
    const stars = Array.from({ length: 5 }).map((_, index) => {
      const value = index + 1;
      const active = participant.userRating ? value <= participant.userRating : false;
      return `<button type="button" class="star participant-star ${active ? 'active' : ''}" data-participant-id="${participant.id}" data-rating="${value}">★</button>`;
    }).join('');
    const userRatingText = participant.userRating
      ? `<span class="participant-user-rating">Calificaste con ${participant.userRating}★</span>`
      : '<span class="participant-user-rating muted">Selecciona estrellas para calificar</span>';

    return `
      <div class="participant-card" data-participant-id="${participant.id}">
        <div class="participant-info">
          <img src="${participant.avatar || createAvatarFromName(participant.name)}" alt="${participant.name}">
          <div class="participant-meta">
            <h5>${participant.name} ${badge}</h5>
            <p>${participant.rating ? `${Number(participant.rating).toFixed(1)} ★` : '—'} · ${participant.trips || 0} viajes</p>
          </div>
        </div>
        <div class="participant-rating">
          <div class="star-rating">
            ${stars}
          </div>
          ${userRatingText}
        </div>
      </div>
    `;
  }).join('');
}

function setParticipantRating(participantId, rating) {
  if (!currentDetailContext || currentDetailContext.context !== 'completed') return;
  const trip = currentDetailContext.trip;
  const participant = trip.participants?.find(p => p.id === participantId);
  if (!participant) return;

  participant.userRating = rating;
  renderTripParticipants(trip, 'completed');
  showNotification(`Calificaste a ${participant.name} con ${rating} estrella${rating > 1 ? 's' : ''}`, 'success');
}

async function voteReport(reportId, delta) {
  const report = appData.safetyReports.find(r => String(r.id) === String(reportId));
  if (!report) return;
  const key = String(report.id);
  if (reportVoteInFlight[key]) {
    return;
  }
  const previousVote = userReportVotes[key] || 0;
  let nextVote = delta;
  if (previousVote === delta) {
    nextVote = 0;
  }

  const deltaChange = nextVote - previousVote;
  report.votes = (report.votes || 0) + deltaChange;

  if (nextVote === 0) {
    delete userReportVotes[key];
  } else {
    userReportVotes[key] = nextVote;
  }

  persistReportVotes();
  if (deltaChange !== 0 && backendAvailable) {
    reportVoteInFlight[key] = true;
  }
  renderSafetyReports();

  if (!backendAvailable || deltaChange === 0) {
    if (reportVoteInFlight[key]) {
      delete reportVoteInFlight[key];
    }
    return;
  }

  try {
    await apiPost(`/safety-reports/${report.id}/votes`, { delta: deltaChange });
  } catch (error) {
    setBackendAvailability(false);
    console.warn('No se pudo registrar el voto en el servidor:', error);
    showNotification('No pudimos sincronizar tu voto. Se mantendrá sólo en este dispositivo.', 'warning');
  } finally {
    delete reportVoteInFlight[key];
    renderSafetyReports();
  }
}

function registerActivity({ icon = 'fas fa-bell', title, description = '' }) {
  if (!title) return;
  
  const entry = {
    id: `act_${Date.now()}`,
    icon,
    title,
    description,
    timestamp: new Date().toISOString()
  };

  if (!Array.isArray(appData.recentActivity)) {
    appData.recentActivity = [];
  }

  appData.recentActivity.unshift(entry);
  appData.recentActivity = appData.recentActivity.slice(0, 10);
  renderRecentActivity();
}

function getTransportIcon(mode = '') {
  const normalized = (mode || '').toLowerCase();
  if (normalized === 'metro') return 'fas fa-subway';
  if (normalized === 'micro') return 'fas fa-bus';
  if (normalized === 'a pie') return 'fas fa-person-walking';
  return 'fas fa-route';
}

function getModeClassName(mode = '') {
  const normalized = (mode || '').toLowerCase();
  if (normalized.includes('metro')) return 'metro';
  if (normalized.includes('micro')) return 'micro';
  if (normalized.includes('a pie')) return 'walking';
  return 'route';
}

function renderInitialData() {
  renderPublicTrips(appData.publicTransportTrips, publicTripsMeta);
  renderVehicleTrips(appData.vehicleTrips, vehicleTripsMeta);
  renderSafetyReports(safetyReportsMeta);
  renderRecentActivity();
  renderActiveTrips();
  renderCompletedTrips();
  renderProfile();
  renderHomeStats();
}

function joinTrip(tripId, tripType, options = {}) {
  const collection = tripType === 'public'
    ? appData.publicTransportTrips
    : appData.vehicleTrips;

  const trip = collection.find(item => String(item.id) === String(tripId));
  if (!trip) {
    showNotification('No pudimos encontrar el viaje seleccionado.', 'error');
    return;
  }

  const entry = addTripToUserTrips(trip, tripType, { isHost: false, pickupPoint: options.pickupPoint });
  if (!entry) {
    showNotification('Ya estás unido a este viaje.', 'info');
    return;
  }
  persistUserTripEntry(entry);

  showNotification('Te uniste al viaje. Revisa Mis Viajes.', 'success');
  return entry;
}

function renderProfile() {
  const user = appData.users?.[0];
  if (!user) return;

  if (!user.profileUpdatedAt) {
    user.profileUpdatedAt = new Date().toISOString();
  }

  syncEmergencyContactsFromUser(user);

  const nameEl = document.getElementById('profileName');
  const emailEl = document.getElementById('profileEmail');
  const tripsCompletedEl = document.getElementById('profileTripsCompleted');
  const tripsCreatedEl = document.getElementById('profileTripsCreated');
  const ratingEl = document.getElementById('profileRating');
  const verificationEl = document.getElementById('verificationStatus');
  const avatarImg = document.querySelector('.profile-avatar img');

  if (nameEl) nameEl.textContent = user.name;
  if (emailEl) emailEl.textContent = user.email;
  if (tripsCompletedEl) tripsCompletedEl.textContent = user.trips_completed ?? 0;
  if (tripsCreatedEl) tripsCreatedEl.textContent = user.trips_created ?? 0;
  if (ratingEl) ratingEl.textContent = user.rating?.toFixed(1) ?? '—';
  if (avatarImg && user.photo) avatarImg.src = user.photo;

  const progress = calculateProfileProgress(user);
  const verificationComplete = progress.missing.length === 0;

  if (verificationEl) {
    verificationEl.classList.toggle('unverified', !verificationComplete);
    if (verificationComplete) {
      verificationEl.innerHTML = '<i class="fas fa-circle-check"></i> Perfil verificado';
    } else {
      verificationEl.innerHTML = `<i class="fas fa-circle-exclamation"></i> Completa tu perfil (${progress.missing.length} pendiente${progress.missing.length === 1 ? '' : 's'})`;
    }
  }

  const progressBar = document.getElementById('profileProgressBar');
  if (progressBar) {
    const width = progress.percent === 0 ? 4 : progress.percent;
    progressBar.style.width = `${width}%`;
  }
  const progressValueEl = document.getElementById('profileProgressValue');
  if (progressValueEl) {
    progressValueEl.textContent = `${progress.percent}%`;
  }
  const progressLabel = document.getElementById('profileProgressLabel');
  if (progressLabel) {
    progressLabel.textContent = verificationComplete
      ? '¡Tu perfil está completo y verificado!'
      : `Completa ${progress.missing.length} campo${progress.missing.length === 1 ? '' : 's'} para desbloquear la verificación comunitaria.`;
  }
  const missingList = document.getElementById('profileMissingFields');
  if (missingList) {
    missingList.innerHTML = progress.missing.length
      ? progress.missing.map(item => `<li>${item}</li>`).join('')
      : '<li class="all-good">Perfil completo</li>';
  }
  const updatedEl = document.getElementById('profileUpdatedAt');
  if (updatedEl) {
    updatedEl.textContent = `Última actualización: ${formatRelativeTime(user.profileUpdatedAt)}`;
  }

  const phoneField = document.getElementById('profilePhone');
  const contactsField = document.getElementById('profileEmergencyContacts');
  const descriptionField = document.getElementById('profileDescription');
  const bankField = document.getElementById('profileBankDetails');

  if (phoneField) phoneField.value = user.phone || '';
  if (contactsField) contactsField.value = user.emergency_contacts || '';
  if (descriptionField) descriptionField.value = user.description || '';
  if (bankField) bankField.value = user.bank_details || '';

  setProfileFormStatus('', '');
  renderSettingsPanel();
  updatePanicContacts();
}

function calculateProfileProgress(user = {}) {
  const requiredKeys = Object.keys(PROFILE_REQUIRED_FIELDS);
  const total = requiredKeys.length || 1;
  let completed = 0;
  const missing = [];

  requiredKeys.forEach(key => {
    if (user[key] && String(user[key]).trim().length) {
      completed += 1;
    } else {
      missing.push(PROFILE_REQUIRED_FIELDS[key]);
    }
  });

  const percent = Math.round((completed / total) * 100);
  return { percent, missing };
}

function setProfileFormStatus(message = '', state = '') {
  const statusEl = document.getElementById('profileFormStatus');
  if (!statusEl) return;
  statusEl.textContent = message;
  statusEl.className = `form-status${state ? ` ${state}` : ''}`;
}

function setProfileSyncState(patch = {}) {
  profileSyncState = { ...profileSyncState, ...patch };
}

function mergeProfileFromApi(profile = {}) {
  if (!profile) return;
  updateUserProfile(profile, { skipTimestamp: true });
  setProfileSyncState({
    status: 'online',
    updatedAt: profile.profileUpdatedAt || new Date().toISOString(),
    error: null
  });
}

function initializeRegistrationForm() {
  const form = document.getElementById('registrationForm');
  if (!form) return;
  form.addEventListener('submit', handleRegistrationSubmit);
  const methodSelect = document.getElementById('registrationMethod');
  if (methodSelect) {
    const toggle = () => {
      const codeGroup = document.getElementById('registrationCodeGroup');
      if (codeGroup) {
        codeGroup.classList.toggle('hidden', methodSelect.value !== 'codigo');
      }
    };
    toggle();
    methodSelect.addEventListener('change', toggle);
  }
  setRegistrationStatus('Utiliza tu correo institucional para comenzar.', 'pending');
}

async function syncProfileWithBackend(updates = {}) {
  if (!backendAvailable) {
    setProfileSyncState({ status: 'offline', error: 'Sin conexión con el servidor.' });
    return false;
  }
  setProfileSyncState({ status: 'syncing', error: null });
  try {
    const response = await apiPatch('/profile', updates);
    if (response?.data) {
      mergeProfileFromApi(response.data);
      return true;
    }
  } catch (error) {
    setProfileSyncState({ status: 'error', error: error.message });
    throw error;
  }
  return false;
}

async function handleProfileFormSubmit(e) {
  e.preventDefault();
  const phoneField = document.getElementById('profilePhone');
  const contactsField = document.getElementById('profileEmergencyContacts');
  const descriptionField = document.getElementById('profileDescription');
  const bankField = document.getElementById('profileBankDetails');

  const phoneValue = phoneField?.value.trim() || '';
  const contactsValue = contactsField?.value.trim() || '';
  const descriptionValue = descriptionField?.value.trim() || '';
  const bankValue = bankField?.value.trim() || '';

  if (phoneValue && phoneValue.replace(/\D/g, '').length < 8) {
    setProfileFormStatus('Ingresa un teléfono válido.', 'error');
    showNotification('Ingresa un teléfono válido.', 'error');
    return;
  }

  const updates = {
    phone: phoneValue,
    emergency_contacts: contactsValue,
    description: descriptionValue,
    bank_details: bankValue,
    profileUpdatedAt: new Date().toISOString()
  };

  updateUserProfile(updates, { skipTimestamp: true });
  setProfileFormStatus('Guardando cambios...', 'pending');

  try {
    const synced = await syncProfileWithBackend(updates);
    if (synced) {
      setProfileFormStatus('Perfil sincronizado correctamente.', 'success');
      showNotification('Perfil actualizado correctamente.', 'success');
    } else {
      setProfileFormStatus('Guardado local. Reintenta cuando vuelva la conexión.', 'warning');
      showNotification('No pudimos sincronizar con el servidor. Tus cambios se guardaron localmente.', 'warning');
    }
  } catch (error) {
    console.warn('No se pudo sincronizar el perfil:', error);
    setProfileFormStatus('Guardado local. Reintenta cuando vuelva la conexión.', 'warning');
    showNotification('No pudimos sincronizar con el servidor. Tus cambios se guardaron localmente.', 'warning');
  }
}

function handleAvatarSelection(file) {
  if (!file) return;
  if (!file.type.startsWith('image/')) {
    showNotification('Selecciona una imagen en formato válido.', 'warning');
    return;
  }

  const reader = new FileReader();
  reader.onload = function(event) {
    if (!event.target?.result) return;
    const updates = {
      photo: event.target.result,
      profileUpdatedAt: new Date().toISOString()
    };
    updateUserProfile(updates, { skipTimestamp: true });
    setProfileFormStatus('Actualizando foto...', 'pending');
    syncProfileWithBackend(updates)
      .then(synced => {
        if (synced) {
          setProfileFormStatus('Foto de perfil actualizada.', 'success');
          showNotification('Foto de perfil actualizada.', 'success');
        } else {
          setProfileFormStatus('Foto guardada localmente. Reintenta más tarde.', 'warning');
          showNotification('No pudimos sincronizar la foto. Guardado local.', 'warning');
        }
      })
      .catch(error => {
        console.warn('No se pudo sincronizar la foto de perfil:', error);
        setProfileFormStatus('Foto guardada localmente. Reintenta más tarde.', 'warning');
        showNotification('No pudimos sincronizar la foto. Guardado local.', 'warning');
      });
  };
  reader.onerror = function() {
    showNotification('No pudimos leer la imagen seleccionada.', 'error');
  };
  reader.readAsDataURL(file);
}


function setRegistrationStatus(message = '', state = '') {
  const statusEl = document.getElementById('registrationStatus');
  if (!statusEl) return;
  statusEl.textContent = message;
  statusEl.className = `form-status${state ? ` ${state}` : ''}`;
}

function getEmailDomain(email = '') {
  const normalized = String(email || '').trim().toLowerCase();
  return normalized.includes('@') ? normalized.split('@')[1] : '';
}

function validateInstitutionalEmail(email = '') {
  const domain = getEmailDomain(email);
  return REGISTRATION_ALLOWED_DOMAINS.includes(domain);
}

async function handleRegistrationSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  const payload = {
    method: formData.get('method') || 'codigo',
    email: formData.get('email')?.trim(),
    displayName: formData.get('displayName')?.trim(),
    password: formData.get('password') || '',
    verificationCode: formData.get('verificationCode')?.trim() || ''
  };

  if (!validateInstitutionalEmail(payload.email)) {
    setRegistrationStatus('Solo aceptamos correos institucionales válidos.', 'error');
    showNotification('Revisa el dominio de tu correo institucional.', 'error');
    return;
  }

  setRegistrationStatus('Enviando solicitud...', 'pending');

  const localRecord = {
    id: Date.now().toString(),
    ...payload,
    status: 'local_pending',
    createdAt: new Date().toISOString()
  };
  appData.registrations.unshift(localRecord);
  registerActivity({
    icon: 'fas fa-user-plus',
    title: 'Nuevo preregistro',
    description: payload.email
  });

  if (!backendAvailable) {
    setRegistrationStatus('Guardado localmente. Reintenta cuando vuelva la conexión.', 'warning');
    showNotification('Sin conexión. Guardamos tu preregistro en este dispositivo.', 'warning');
    form.reset();
    document.getElementById('registrationMethod')?.dispatchEvent(new Event('change'));
    return;
  }

  try {
    const response = await apiPost('/registrations', payload);
    const status = response?.data?.status || 'pending_verification';
    const debugCode = response?.meta?.debugCode;
    const baseMessage = status === 'verified'
      ? 'Cuenta verificada para pruebas internas.'
      : 'Solicitud registrada. Revisa tu correo para completar la verificación.';
    const message = debugCode
      ? `${baseMessage} Código demo: ${debugCode}`
      : baseMessage;
    setRegistrationStatus(message, 'success');
    showNotification('Solicitud de preregistro enviada.', 'success');
  } catch (error) {
    console.warn('No se pudo completar el preregistro:', error);
    setBackendAvailability(false, { helper: 'Fallo al registrar la solicitud.' });
    setRegistrationStatus('No pudimos contactar al servidor. Guardamos tu solicitud localmente.', 'warning');
    showNotification('Guardaremos tu preregistro y lo sincronizaremos luego.', 'warning');
  }

  form.reset();
  document.getElementById('registrationMethod')?.dispatchEvent(new Event('change'));
}
function updateUserProfile(updates = {}, options = {}) {
  if (!appData.users || !appData.users.length) return null;
  const nextUser = { ...appData.users[0], ...updates };
  if (!options.skipTimestamp && !updates.profileUpdatedAt) {
    nextUser.profileUpdatedAt = new Date().toISOString();
  }
  appData.users[0] = nextUser;
  if (typeof nextUser.emergency_contacts !== 'undefined') {
    syncEmergencyContactsFromUser(nextUser);
  }
  saveProfileToStorage(nextUser);
  renderProfile();
  return nextUser;
}

function renderHomeStats() {
  const stats = calculateAppStats();
  const membersEl = document.getElementById('activeMembersCount');
  const tripsEl = document.getElementById('tripsTodayCount');
  if (membersEl) {
    membersEl.textContent = `${stats.members.toLocaleString('es-CL')} miembros activos`;
  }
  if (tripsEl) {
    tripsEl.textContent = `${stats.tripsToday.toLocaleString('es-CL')} viajes hoy`;
  }
  renderCommunityPulse();
}

function calculateAppStats() {
  const membersCount = appData.users?.length || 0;
  const tripsToday = getPublicTripsCount({ filters: { mode: '' } }) + getVehicleTripsCount({ filters: { type: 'todos' } });

  return {
    members: membersCount,
    tripsToday
  };
}

function renderCommunityPulse() {
  const card = document.getElementById('communityPulseCard');
  if (!card) return;

  const activeChats = userTrips.active.filter(trip => trip.hasStarted || trip.isHost).length;
  const pendingReviews = userTrips.completed.filter(trip => !trip.hostRating).length;
  const donations = userTrips.completed.filter(trip => Number(trip.donationAmount) > 0).length;

  const activeChatsEl = document.getElementById('pulseActiveChats');
  const pendingReviewsEl = document.getElementById('pulsePendingReviews');
  const donationsEl = document.getElementById('pulseDonations');
  const updatedEl = document.getElementById('communityPulseUpdated');

  if (activeChatsEl) activeChatsEl.textContent = activeChats.toString();
  if (pendingReviewsEl) pendingReviewsEl.textContent = pendingReviews.toString();
  if (donationsEl) donationsEl.textContent = donations.toString();
  if (updatedEl) {
    updatedEl.textContent = lastBackendSync
      ? `Actualizado ${formatRelativeTime(lastBackendSync)}`
      : 'Sincronizando...';
  }
}

function startHostedTrip(userTripId) {
  const trip = userTrips.active.find(item => item.id === userTripId);
  if (!trip) return;
  if (!trip.isHost) {
    showNotification('Solo el anfitrión puede iniciar el viaje.', 'warning');
    return;
  }
  if (trip.hasStarted) {
    showNotification('Este viaje ya está en curso.', 'info');
    return;
  }

  trip.hasStarted = true;
  trip.status = 'En curso';
  trip.statusClass = 'status--info';
  markTripLifecycleStatus(trip.tripType, trip.referenceId, 'in_progress');
  renderActiveTrips();
  refreshPublicTrips();
  refreshVehicleTrips();
  showNotification('Has iniciado el viaje.', 'success');
}

function finishHostedTrip(userTripId) {
  const index = userTrips.active.findIndex(item => item.id === userTripId);
  if (index === -1) return;

  const trip = userTrips.active[index];
  if (!trip.isHost) {
    showNotification('Solo el anfitrión puede finalizar el viaje.', 'warning');
    return;
  }

  userTrips.active.splice(index, 1);
  moveTripToCompleted(trip, 'Finalizado por anfitrión');
  markTripLifecycleStatus(trip.tripType, trip.referenceId, 'completed');
  renderActiveTrips();
  renderCompletedTrips();
  refreshPublicTrips();
  refreshVehicleTrips();
  showNotification('El viaje se marcó como finalizado.', 'success');
}

function initializeStarRating() {
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('star')) {
      if (e.target.getAttribute('data-participant-id')) {
        return;
      }
      const rating = parseInt(e.target.getAttribute('data-rating'));
      const starContainer = e.target.closest('.star-rating');
      const stars = starContainer.querySelectorAll('.star');
      
      // Reset all stars
      stars.forEach(star => star.classList.remove('active'));
      
      // Activate stars up to the selected rating
      for (let i = 0; i < rating; i++) {
        stars[i].classList.add('active');
      }
      
      showNotification(`Calificación: ${rating} estrella${rating > 1 ? 's' : ''}`, 'info');
    }
  });
}

function initializeFilters() {
  const filterMode = document.getElementById('filterMode');
  if (filterMode) {
    publicTripsFilters.mode = filterMode.value || '';
    filterMode.addEventListener('change', function() {
      publicTripsFilters.mode = this.value || '';
      filterPublicTrips(publicTripsFilters.mode);
    });
  }

  const refreshTripsBtn = document.getElementById('refreshPublicTripsBtn');
  if (refreshTripsBtn) {
    refreshTripsBtn.addEventListener('click', function(e) {
      e.preventDefault();
      filterPublicTrips(publicTripsFilters.mode);
    });
  }

  const vehicleFilter = document.getElementById('vehicleFilter');
  if (vehicleFilter) {
    vehicleTripsFilters.type = vehicleFilter.value || 'todos';
    vehicleFilter.addEventListener('change', function() {
      vehicleTripsFilters.type = this.value || 'todos';
      filterVehicleTrips(vehicleTripsFilters.type);
    });
  }

  const refreshVehicleBtn = document.getElementById('refreshVehicleTripsBtn');
  if (refreshVehicleBtn) {
    refreshVehicleBtn.addEventListener('click', function(e) {
      e.preventDefault();
      filterVehicleTrips(vehicleTripsFilters.type);
    });
  }

  const reportTypeFilter = document.getElementById('reportTypeFilter');
  if (reportTypeFilter) {
    safetyReportsFilters.type = reportTypeFilter.value || 'todos';
    reportTypeFilter.addEventListener('change', function() {
      safetyReportsFilters.type = this.value || 'todos';
      filterSafetyReports();
    });
  }

  const reportSeverityFilter = document.getElementById('reportSeverityFilter');
  if (reportSeverityFilter) {
    safetyReportsFilters.severity = reportSeverityFilter.value || 'todos';
    reportSeverityFilter.addEventListener('change', function() {
      safetyReportsFilters.severity = this.value || 'todos';
      filterSafetyReports();
    });
  }

  const refreshReportsBtn = document.getElementById('refreshReportsBtn');
  if (refreshReportsBtn) {
    refreshReportsBtn.addEventListener('click', function(e) {
      e.preventDefault();
      filterSafetyReports();
    });
  }
}

async function filterPublicTrips(mode) {
  publicTripsFilters.mode = mode || '';

  if (backendAvailable) {
    const requestId = ++publicTripsRequestId;
    setPublicTripsLoading(true);
    try {
      const response = await fetchPublicTripsFromApi({
        mode: publicTripsFilters.mode || undefined,
        limit: PUBLIC_TRIPS_PAGE_SIZE,
        page: publicTripsFilters.page
      });

      if (requestId !== publicTripsRequestId) return;

      appData.publicTransportTrips = response.data;
      publicTripsMeta = {
        total: response.meta?.total ?? response.data.length,
        filters: response.meta?.filters || { mode: publicTripsFilters.mode || null },
        generatedAt: response.meta?.generatedAt || new Date().toISOString()
      };
      renderPublicTrips(appData.publicTransportTrips, publicTripsMeta);
    } catch (error) {
      if (requestId !== publicTripsRequestId) return;
      setBackendAvailability(false);
      console.warn('Fallo al sincronizar viajes públicos:', error);
      showNotification('No se pudo actualizar desde el servidor. Se mostrarán los datos en local.', 'warning');
      const localTrips = filterLocalPublicTrips(publicTripsFilters.mode);
      publicTripsMeta = {
        total: localTrips.length,
        filters: { mode: publicTripsFilters.mode || null },
        generatedAt: new Date().toISOString()
      };
      renderPublicTrips(localTrips, publicTripsMeta);
    } finally {
      if (requestId === publicTripsRequestId) {
        setPublicTripsLoading(false);
      }
    }
    return;
  }

  const localTrips = filterLocalPublicTrips(publicTripsFilters.mode);
  publicTripsMeta = {
    total: localTrips.length,
    filters: { mode: publicTripsFilters.mode || null },
    generatedAt: new Date().toISOString()
  };
  renderPublicTrips(localTrips, publicTripsMeta);
}

async function filterVehicleTrips(type) {
  vehicleTripsFilters.type = type || 'todos';

  if (backendAvailable) {
    const requestId = ++vehicleTripsRequestId;
    setVehicleTripsLoading(true);
    try {
      const response = await fetchVehicleTripsFromApi({
        type: vehicleTripsFilters.type !== 'todos' ? vehicleTripsFilters.type : undefined,
        limit: VEHICLE_TRIPS_PAGE_SIZE,
        page: vehicleTripsFilters.page
      });

      if (requestId !== vehicleTripsRequestId) return;

      appData.vehicleTrips = response.data;
      vehicleTripsMeta = {
        total: response.meta?.total ?? response.data.length,
        filters: response.meta?.filters || { type: vehicleTripsFilters.type || 'todos' },
        generatedAt: response.meta?.generatedAt || new Date().toISOString()
      };
      renderVehicleTrips(appData.vehicleTrips, vehicleTripsMeta);
    } catch (error) {
      if (requestId !== vehicleTripsRequestId) return;
      setBackendAvailability(false);
      console.warn('Fallo al sincronizar viajes en vehículo:', error);
      showNotification('No se pudo actualizar desde el servidor. Se usarán los datos locales.', 'warning');
      const localTrips = filterLocalVehicleTrips(vehicleTripsFilters.type);
      vehicleTripsMeta = {
        total: localTrips.length,
        filters: { type: vehicleTripsFilters.type || 'todos' },
        generatedAt: new Date().toISOString()
      };
      renderVehicleTrips(localTrips, vehicleTripsMeta);
    } finally {
      if (requestId === vehicleTripsRequestId) {
        setVehicleTripsLoading(false);
      }
    }
    return;
  }

  const localTrips = filterLocalVehicleTrips(vehicleTripsFilters.type);
  vehicleTripsMeta = {
    total: localTrips.length,
    filters: { type: vehicleTripsFilters.type || 'todos' },
    generatedAt: new Date().toISOString()
  };
  renderVehicleTrips(localTrips, vehicleTripsMeta);
}

function refreshPublicTrips() {
  return filterPublicTrips(publicTripsFilters.mode);
}

function refreshVehicleTrips() {
  return filterVehicleTrips(vehicleTripsFilters.type);
}

async function filterSafetyReports() {
  if (backendAvailable) {
    const requestId = ++safetyReportsRequestId;
    setSafetyReportsLoading(true);
    try {
      const response = await fetchSafetyReportsFromApi({
        type: safetyReportsFilters.type,
        severity: safetyReportsFilters.severity,
        limit: SAFETY_REPORTS_PAGE_SIZE,
        page: safetyReportsFilters.page
      });

      if (requestId !== safetyReportsRequestId) return;

      appData.safetyReports = response.data;
      safetyReportsMeta = {
        total: response.meta?.total ?? response.data.length,
        filters: response.meta?.filters || { type: null, severity: null },
        generatedAt: response.meta?.generatedAt || new Date().toISOString()
      };
      renderSafetyReports();
    } catch (error) {
      if (requestId !== safetyReportsRequestId) return;
      setBackendAvailability(false);
      console.warn('Fallo al sincronizar reportes de seguridad:', error);
      showNotification('No se pudo actualizar los reportes. Usando datos locales.', 'warning');
      const localReports = filterLocalSafetyReports(safetyReportsFilters.type, safetyReportsFilters.severity);
      safetyReportsMeta = {
        total: localReports.length,
        filters: { type: safetyReportsFilters.type, severity: safetyReportsFilters.severity },
        generatedAt: new Date().toISOString()
      };
      appData.safetyReports = localReports;
      renderSafetyReports();
    } finally {
      if (requestId === safetyReportsRequestId) {
        setSafetyReportsLoading(false);
      }
    }
    return;
  }

  const localReports = filterLocalSafetyReports(safetyReportsFilters.type, safetyReportsFilters.severity);
  safetyReportsMeta = {
    total: localReports.length,
    filters: { type: safetyReportsFilters.type, severity: safetyReportsFilters.severity },
    generatedAt: new Date().toISOString()
  };
  appData.safetyReports = localReports;
  renderSafetyReports();
}

function filterLocalPublicTrips(mode) {
  if (!mode) {
    return appData.publicTransportTrips.slice();
  }
  return appData.publicTransportTrips.filter(trip => (trip.mode || '').toLowerCase() === mode.toLowerCase());
}

function filterLocalVehicleTrips(type) {
  const normalizedType = normalizeText(type);
  if (!normalizedType || normalizedType === 'todos') {
    return appData.vehicleTrips.slice();
  }
  return appData.vehicleTrips.filter(trip => {
    const vehicleType = normalizeText(trip.vehicle_type || '');
    return normalizedType === 'automovil'
      ? vehicleType.includes('automovil')
      : vehicleType.includes(normalizedType);
  });
}

function filterLocalSafetyReports(type, severity) {
  const normalizedType = normalizeText(type);
  const normalizedSeverity = normalizeText(severity);
  return (appData.safetyReports || []).filter(report => {
    const matchesType = !normalizedType || normalizedType === 'todos'
      ? true
      : (report.type || '').toLowerCase() === normalizedType;
    const matchesSeverity = !normalizedSeverity || normalizedSeverity === 'todos'
      ? true
      : (report.severity || '').toLowerCase() === normalizedSeverity;
    return matchesType && matchesSeverity;
  });
}

function setPublicTripsLoading(isLoading) {
  publicTripsLoading = isLoading;
  const refreshBtn = document.getElementById('refreshPublicTripsBtn');
  if (refreshBtn) {
    refreshBtn.disabled = isLoading;
    refreshBtn.classList.toggle('is-loading', isLoading);
  }
  updatePublicTripsSummary();
}

function updatePublicTripsSummary(meta = publicTripsMeta) {
  const summaryEl = document.getElementById('publicTripsSummary');
  if (!summaryEl) return;

  if (publicTripsLoading) {
    summaryEl.textContent = 'Actualizando viajes...';
    summaryEl.classList.add('is-loading');
    return;
  }

  summaryEl.classList.remove('is-loading');
  const total = getPublicTripsCount(meta);
  summaryEl.textContent = `${total} viajes activos`;
}


function setVehicleTripsLoading(isLoading) {
  vehicleTripsLoading = isLoading;
  const refreshBtn = document.getElementById('refreshVehicleTripsBtn');
  if (refreshBtn) {
    refreshBtn.disabled = isLoading;
    refreshBtn.classList.toggle('is-loading', isLoading);
  }
  updateVehicleTripsSummary();
}

function updateVehicleTripsSummary(meta = vehicleTripsMeta) {
  const summaryEl = document.getElementById('vehicleTripsSummary');
  if (!summaryEl) return;

  if (vehicleTripsLoading) {
    summaryEl.textContent = 'Actualizando viajes...';
    summaryEl.classList.add('is-loading');
    return;
  }

  summaryEl.classList.remove('is-loading');
  const total = getVehicleTripsCount(meta);
  summaryEl.textContent = `${total} viajes activos`;
}


function getPublicTripsCount(meta = publicTripsMeta) {
  const modeFilter = (meta.filters?.mode || publicTripsFilters.mode || '').toLowerCase();
  return (appData.publicTransportTrips || []).filter(trip => {
    if (shouldHideTripFromListings(trip)) return false;
    if (modeFilter && (trip.mode || '').toLowerCase() !== modeFilter) {
      return false;
    }
    return true;
  }).length;
}

function getVehicleTripsCount(meta = vehicleTripsMeta) {
  const typeFilter = (meta.filters?.type || vehicleTripsFilters.type || 'todos').toLowerCase();
  return (appData.vehicleTrips || []).filter(trip => {
    if (shouldHideTripFromListings(trip)) return false;
    if (typeFilter !== 'todos' && (trip.vehicle_type || '').toLowerCase() !== typeFilter) {
      return false;
    }
    return true;
  }).length;
}

function getSafetyReportsCount(meta = safetyReportsMeta) {
  const typeFilter = (meta.filters?.type || safetyReportsFilters.type || 'todos').toLowerCase();
  const severityFilter = (meta.filters?.severity || safetyReportsFilters.severity || 'todos').toLowerCase();
  return (appData.safetyReports || []).filter(report => {
    const matchesType = typeFilter === 'todos' || (report.type || '').toLowerCase() === typeFilter;
    const matchesSeverity = severityFilter === 'todos' || (report.severity || '').toLowerCase() === severityFilter;
    return matchesType && matchesSeverity;
  }).length;
}
function setSafetyReportsLoading(isLoading) {
  safetyReportsLoading = isLoading;
  const refreshBtn = document.getElementById('refreshReportsBtn');
  if (refreshBtn) {
    refreshBtn.disabled = isLoading;
    refreshBtn.classList.toggle('is-loading', isLoading);
  }
  updateSafetyReportsSummary();
}

function updateSafetyReportsSummary(meta = safetyReportsMeta) {
  const summaryEl = document.getElementById('safetyReportsSummary');
  if (!summaryEl) return;

  if (safetyReportsLoading) {
    summaryEl.textContent = 'Actualizando reportes...';
    summaryEl.classList.add('is-loading');
    return;
  }

  summaryEl.classList.remove('is-loading');
  const total = getSafetyReportsCount(meta);
  summaryEl.textContent = `${total} reportes`;
}


function setChatLoading(isLoading) {
  chatLoading = isLoading;
  const listEl = document.getElementById('chatMessageList');
  if (isLoading && listEl) {
    listEl.innerHTML = '<p class="activity-empty">Cargando mensajes...</p>';
  }
  updateChatRefreshButton();
}

function showNotification(message, type = 'info') {
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification status--${type}`;
  notification.style.cssText = `
    position: fixed;
    top: 80px;
    right: 16px;
    padding: 12px 16px;
    border-radius: 8px;
    color: white;
    font-weight: 500;
    z-index: 3000;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    max-width: 300px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  `;
  
  // Set background color based on type
  switch(type) {
    case 'success':
      notification.style.backgroundColor = 'var(--color-success)';
      break;
    case 'error':
      notification.style.backgroundColor = 'var(--color-error)';
      break;
    case 'warning':
      notification.style.backgroundColor = 'var(--color-warning)';
      break;
    default:
      notification.style.backgroundColor = 'var(--color-info)';
  }
  
  notification.textContent = message;
  document.body.appendChild(notification);
  
  // Animate in
  setTimeout(() => {
    notification.style.transform = 'translateX(0)';
  }, 100);
  
  // Remove after 3 seconds
  setTimeout(() => {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }, 3000);
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('es-ES', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
}

function formatRelativeTime(timestamp) {
  const date = new Date(timestamp);
  if (Number.isNaN(date.getTime())) {
    return 'Hace un momento';
  }

  const diffMs = Date.now() - date.getTime();
  const minutes = Math.floor(diffMs / 60000);

  if (minutes < 1) return 'Hace instantes';
  if (minutes < 60) return `Hace ${minutes} min${minutes === 1 ? '' : 's'}`;

  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `Hace ${hours} h`;

  const days = Math.floor(hours / 24);
  return `Hace ${days} d`;
}

function formatTripDateTime(dateString, timeString) {
  if (!dateString && !timeString) {
    return '';
  }

  if (!dateString) {
    return timeString;
  }

  const tripDate = new Date(dateString);
  if (Number.isNaN(tripDate.getTime())) {
    return timeString ? `${dateString} ${timeString}` : dateString;
  }

  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  let label;
  if (tripDate.toDateString() === today.toDateString()) {
    label = 'Hoy';
  } else if (tripDate.toDateString() === tomorrow.toDateString()) {
    label = 'Mañana';
  } else {
    label = formatDate(dateString);
  }

  return timeString ? `${label} ${timeString}` : label;
}

// Keyboard navigation
document.addEventListener('keydown', function(e) {
  // ESC key closes menu or modal
  if (e.key === 'Escape') {
    const sideNav = document.getElementById('sideNav');
    const countdownModal = document.getElementById('panicCountdownModal');
    const activeModal = document.getElementById('panicActiveModal');
    const tripDetailModal = document.getElementById('tripDetailModal');
    const feedbackModal = document.getElementById('tripFeedbackModal');
    const panicDrawer = document.getElementById('panicHistoryDrawer');
    
    if (sideNav && sideNav.classList.contains('open')) {
      closeMenu();
    }
    if (countdownModal && !countdownModal.classList.contains('hidden')) {
      cancelPanicAlert();
    } else if (activeModal && !activeModal.classList.contains('hidden')) {
      dismissPanicModal();
    } else if (tripDetailModal && !tripDetailModal.classList.contains('hidden')) {
      closeTripDetailModal();
    } else if (feedbackModal && !feedbackModal.classList.contains('hidden')) {
      closeTripFeedbackModal();
    } else if (panicDrawer && !panicDrawer.classList.contains('hidden')) {
      closePanicHistoryDrawer();
    }
  }
});

// Prevent default behavior for demo links
document.addEventListener('click', function(e) {
  const link = e.target.closest('a');
  if (link && link.getAttribute('href') === '#') {
    e.preventDefault();
  }
});

// Export functions for global access
window.joinTrip = joinTrip;
window.switchTab = switchTab;
window.startHostedTrip = startHostedTrip;
window.finishHostedTrip = finishHostedTrip;
window.viewVehicleTrip = viewVehicleTrip;
window.viewUserTripDetail = viewUserTripDetail;
window.voteReport = voteReport;
window.openTripChat = openTripChat;
window.openTripFeedbackModal = openTripFeedbackModal;
