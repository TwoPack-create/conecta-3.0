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
  ]
};

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
const pathToSectionMap = buildPathToSection(routeMap);
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
let lifecycleIntervalId = null;
let currentCompletedTrip = null;
let currentChatTrip = null;
const REPORT_VOTE_STORAGE_KEY = 'conecta-route-votes';
let userReportVotes = loadStoredReportVotes();

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

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded, initializing app...');
  initializeApp();
});

window.addEventListener('popstate', handlePopState);

async function initializeApp() {
  try {
    initializeNavigation();
    initializeDarkMode();
    initializeForms();
    initializeStarRating();
    initializeFilters();
    populateMetroLines();
    initializeChatEvents();
    renderInitialData();
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
    return;
  }

  try {
    const [publicTrips, vehicleTrips, safetyReports] = await Promise.all([
      apiGet('/public-trips'),
      apiGet('/vehicle-trips'),
      apiGet('/safety-reports')
    ]);

    if (Array.isArray(publicTrips)) {
      appData.publicTransportTrips = publicTrips;
    }
    if (Array.isArray(vehicleTrips)) {
      appData.vehicleTrips = vehicleTrips;
    }
    if (Array.isArray(safetyReports)) {
      appData.safetyReports = safetyReports;
    }

    backendAvailable = true;
    renderInitialData();
    renderHomeStats();
  } catch (error) {
    backendAvailable = false;
    console.warn('No se pudo cargar información desde el backend:', error);
    showNotification('Servidor no disponible, mostrando datos demo.', 'warning');
    renderHomeStats();
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

async function apiRequest(path, options = {}) {
  const endpoint = `${API_BASE_URL}${path}`;
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

    throw new Error(errorMessage);
  }

  if (response.status === 204) {
    return null;
  }

  return response.json();
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

function openMenu() {
  const sideNav = document.getElementById('sideNav');
  const overlay = document.getElementById('overlay');
  
  if (sideNav && overlay) {
    sideNav.classList.add('open');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    console.log('Menu opened');
  }
}

function closeMenu() {
  const sideNav = document.getElementById('sideNav');
  const overlay = document.getElementById('overlay');
  
  if (sideNav && overlay) {
    sideNav.classList.remove('open');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    console.log('Menu closed');
  }
}

function showSection(sectionId) {
  console.log('Showing section:', sectionId);
  
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

function triggerPanicAlert() {
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
  showNotification('Botón de pánico activado. Alertas enviadas.', 'error');
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

  if (!Array.isArray(appData.emergencyContacts) || !appData.emergencyContacts.length) {
    contactsEl.textContent = 'tus contactos configurados';
    return;
  }

  contactsEl.textContent = appData.emergencyContacts
    .map(contact => `${contact.name} (${contact.phone})`)
    .join(', ');
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

  // Check for saved preference or default to light mode
  const currentTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-color-scheme', currentTheme);
  darkModeToggle.checked = currentTheme === 'dark';

  darkModeToggle.addEventListener('change', function() {
    const theme = this.checked ? 'dark' : 'light';
    document.documentElement.setAttribute('data-color-scheme', theme);
    localStorage.setItem('theme', theme);
    showNotification(`Modo ${theme === 'dark' ? 'oscuro' : 'claro'} activado`, 'info');
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

  setDefaultDates();
  initializeSwapButtons();
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

  if (backendAvailable) {
    try {
      storedTrip = await apiPost('/public-trips', tripPayload);
      if (!storedTrip.date) {
        storedTrip.date = tripPayload.date;
      }
    } catch (error) {
      backendAvailable = false;
      console.error('Error guardando viaje público:', error);
      showNotification('Servidor no disponible, guardando viaje sólo localmente.', 'warning');
    }
  }

  appData.publicTransportTrips.unshift(storedTrip);
  refreshPublicTrips();
  addTripToUserTrips(storedTrip, 'public', { isHost: true });
  
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

  if (backendAvailable) {
    try {
      storedTrip = await apiPost('/vehicle-trips', tripPayload);
      storedTrip.date = storedTrip.date || storedTrip.day || dateValue;
      if (typeof storedTrip.driver_rating === 'undefined') {
        storedTrip.driver_rating = 4.5;
      }
    } catch (error) {
      backendAvailable = false;
      console.error('Error guardando viaje de vehículo:', error);
      showNotification('Servidor no disponible, guardando viaje sólo localmente.', 'warning');
    }
  }

  appData.vehicleTrips.unshift(storedTrip);
  refreshVehicleTrips();
  addTripToUserTrips(storedTrip, 'vehicle', { isHost: true });
  
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
      storedReport = await apiPost('/safety-reports', reportPayload);
    } catch (error) {
      backendAvailable = false;
      console.error('Error guardando reporte de seguridad:', error);
      showNotification('Servidor no disponible, guardando reporte sólo localmente.', 'warning');
    }
  }

  appData.safetyReports.unshift(storedReport);
  renderSafetyReports();
  
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

function renderPublicTrips(trips = appData.publicTransportTrips) {
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
          </div>
          <small class="trip-note">${trip.completionReason || 'Viaje finalizado'}</small>
        </div>
      </div>
    `;
  }).join('');
}

function renderSafetyReports() {
  const container = document.querySelector('.safety-reports');
  if (!container) return;

  container.innerHTML = appData.safetyReports.map(report => {
    const voteValue = userReportVotes[String(report.id)] || 0;
    const upActive = voteValue === 1 ? 'active' : '';
    const downActive = voteValue === -1 ? 'active' : '';
    return `
    <div class="safety-report-card card">
      <div class="card__body">
        <div class="report-header">
          <span class="severity-badge ${report.severity}">
            ${report.severity === 'low' ? 'Riesgo Bajo' : 
              report.severity === 'medium' ? 'Riesgo Medio' : 'Riesgo Alto'}
          </span>
          <span class="report-time">${report.time}</span>
        </div>
        <h4>${report.location}</h4>
        <p>${report.description}</p>
        <small>Reportado el ${formatDate(report.date)}</small>
        <div class="vote-controls">
          <button type="button" class="btn btn--outline btn--sm ${upActive}" onclick="voteReport(${report.id}, 1)">
            <i class="fas fa-thumbs-up"></i>
          </button>
          <span class="vote-count" id="reportVotes-${report.id}">${report.votes ?? 0}</span>
          <button type="button" class="btn btn--outline btn--sm ${downActive}" onclick="voteReport(${report.id}, -1)">
            <i class="fas fa-thumbs-down"></i>
          </button>
        </div>
      </div>
    </div>
  `;
  }).join('');
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

function openTripChat(tripId) {
  const trip = userTrips.active.find(item => item.id === tripId);
  if (!trip) {
    showNotification('Sólo puedes abrir el chat de viajes activos.', 'warning');
    return;
  }

  if (!trip.participants) {
    trip.participants = generateParticipantsForTrip(trip);
  }
  if (!trip.messages) {
    trip.messages = generateChatMessages(trip);
  }

  currentChatTrip = trip;
  renderChatView();
  navigateToSection('chat');
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
  subtitleEl.textContent = `${trip.origin} → ${trip.destination}`;

  listEl.innerHTML = (trip.messages || []).map(message => `
    <div class="chat-message ${message.mine ? 'mine' : ''}">
      <div class="chat-message-header">
        <img src="${message.avatar || createAvatarFromName(message.sender)}" alt="${message.sender}">
        <div>
          <h5>${message.sender}</h5>
          <small>${formatRelativeTime(message.timestamp)}</small>
        </div>
      </div>
      <p class="chat-message-body">${message.text}</p>
    </div>
  `).join('');

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
      <div>
        <h5>${participant.name}</h5>
        <small>${participant.role || 'Pasajero'} · ${participant.rating ? `${Number(participant.rating).toFixed(1)} ★` : '—'} · ${participant.trips || 0} viajes</small>
      </div>
    </div>
  `).join('');
}

function handleChatMessageSubmit() {
  if (!currentChatTrip) {
    showNotification('No hay un chat activo.', 'warning');
    return;
  }
  const input = document.getElementById('chatMessageInput');
  if (!input || !input.value.trim()) return;

  const user = appData.users?.[0];
  const message = {
    id: `msg_${Date.now()}`,
    sender: user?.name || 'Usuario',
    avatar: user?.photo || createAvatarFromName(user?.name || 'Usuario'),
    text: input.value.trim(),
    timestamp: new Date().toISOString(),
    mine: true
  };

  currentChatTrip.messages = currentChatTrip.messages || [];
  currentChatTrip.messages.push(message);
  input.value = '';
  renderChatView();
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
      mine: Boolean(trip.isHost)
    },
    firstPassenger ? {
      id: `msg_${trip.id}_2`,
      sender: firstPassenger.name,
      avatar: firstPassenger.avatar || createAvatarFromName(firstPassenger.name),
      text: '¡Perfecto! Llegaré 10 minutos antes.',
      timestamp: new Date(Date.now() - 25 * 60 * 1000).toISOString(),
      mine: false
    } : null
  ].filter(Boolean);
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

function voteReport(reportId, delta) {
  const report = appData.safetyReports.find(r => String(r.id) === String(reportId));
  if (!report) return;
  const key = String(report.id);
  const previousVote = userReportVotes[key] || 0;
  let nextVote = delta;
  if (previousVote === delta) {
    nextVote = 0;
  }

  report.votes = (report.votes || 0) + nextVote - previousVote;

  if (nextVote === 0) {
    delete userReportVotes[key];
  } else {
    userReportVotes[key] = nextVote;
  }

  persistReportVotes();
  renderSafetyReports();
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
  refreshPublicTrips();
  refreshVehicleTrips();
  renderSafetyReports();
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

  showNotification('Te uniste al viaje. Revisa Mis Viajes.', 'success');
  return entry;
}

function renderProfile() {
  const user = appData.users?.[0];
  if (!user) return;

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

  const isVerified = Boolean(
    user.phone &&
    user.emergency_contacts &&
    user.description &&
    user.bank_details
  );
  if (verificationEl) {
    verificationEl.classList.toggle('unverified', !isVerified);
    verificationEl.innerHTML = isVerified
      ? '<i class="fas fa-circle-check"></i> Perfil verificado'
      : '<i class="fas fa-circle-exclamation"></i> Completa tu perfil para verificarte';
  }

  const phoneField = document.getElementById('profilePhone');
  const contactsField = document.getElementById('profileEmergencyContacts');
  const descriptionField = document.getElementById('profileDescription');
  const bankField = document.getElementById('profileBankDetails');

  if (phoneField) phoneField.value = user.phone || '';
  if (contactsField) contactsField.value = user.emergency_contacts || '';
  if (descriptionField) descriptionField.value = user.description || '';
  if (bankField) bankField.value = user.bank_details || '';
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
}

function calculateAppStats() {
  const memberSet = new Set();
  (appData.users || []).forEach(user => {
    if (user.email) {
      memberSet.add(user.email.toLowerCase());
    } else if (user.name) {
      memberSet.add(user.name.toLowerCase());
    }
  });

  (appData.publicTransportTrips || []).forEach(trip => {
    if (trip.creator) memberSet.add(trip.creator.toLowerCase());
    const participants = trip.participantsTemplate || [];
    participants.forEach(p => memberSet.add(p.name?.toLowerCase() || ''));
  });

  (appData.vehicleTrips || []).forEach(trip => {
    if (trip.driver) memberSet.add(trip.driver.toLowerCase());
    const participants = trip.participantsTemplate || [];
    participants.forEach(p => memberSet.add(p.name?.toLowerCase() || ''));
  });

  userTrips.active.concat(userTrips.completed).forEach(trip => {
    if (trip.organizer) memberSet.add(trip.organizer.toLowerCase());
    (trip.participants || []).forEach(p => memberSet.add(p.name?.toLowerCase() || ''));
  });

  memberSet.delete('');
  const membersCount = Math.max(memberSet.size, appData.users?.length || 0);

  const today = new Date().toISOString().split('T')[0];
  const publicToday = (appData.publicTransportTrips || []).filter(trip => (trip.date || trip.day) === today).length;
  const vehicleToday = (appData.vehicleTrips || []).filter(trip => (trip.date || trip.day) === today).length;
  let tripsToday = publicToday + vehicleToday;
  if (tripsToday === 0) {
    tripsToday = (appData.publicTransportTrips?.length || 0) + (appData.vehicleTrips?.length || 0);
  }

  return {
    members: membersCount,
    tripsToday
  };
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
    filterMode.addEventListener('change', function() {
      filterPublicTrips(this.value);
    });
  }

  const vehicleFilter = document.getElementById('vehicleFilter');
  if (vehicleFilter) {
    vehicleFilter.addEventListener('change', function() {
      filterVehicleTrips(this.value);
    });
  }
}

function filterPublicTrips(mode) {
  const filteredTrips = mode ? 
    appData.publicTransportTrips.filter(trip => trip.mode === mode) :
    appData.publicTransportTrips;
  renderPublicTrips(filteredTrips);
}

function filterVehicleTrips(type) {
  const normalizedType = normalizeText(type);
  if (!normalizedType || normalizedType === 'todos') {
    renderVehicleTrips(appData.vehicleTrips);
    return;
  }

  const filtered = appData.vehicleTrips.filter(trip => {
    const vehicleType = normalizeText(trip.vehicle_type || '');
    return normalizedType === 'automovil'
      ? vehicleType.includes('automovil')
      : vehicleType.includes('motocicleta') || vehicleType.includes('moto');
  });

  renderVehicleTrips(filtered);
}

function refreshPublicTrips() {
  const filterMode = document.getElementById('filterMode');
  const current = filterMode ? filterMode.value : '';
  filterPublicTrips(current);
}

function refreshVehicleTrips() {
  const vehicleFilter = document.getElementById('vehicleFilter');
  const current = vehicleFilter ? vehicleFilter.value : 'todos';
  filterVehicleTrips(current);
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
    
    if (sideNav && sideNav.classList.contains('open')) {
      closeMenu();
    }
    if (countdownModal && !countdownModal.classList.contains('hidden')) {
      cancelPanicAlert();
    } else if (activeModal && !activeModal.classList.contains('hidden')) {
      dismissPanicModal();
    } else if (tripDetailModal && !tripDetailModal.classList.contains('hidden')) {
      closeTripDetailModal();
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
