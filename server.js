const express = require('express');
const path = require('path');
const cors = require('cors');
const { nanoid } = require('nanoid');

const app = express();
const PORT = process.env.PORT || 3000;
const STATIC_DIR = __dirname;
const INDEX_FILE = path.join(STATIC_DIR, 'index.html');

const dataStore = {
  users: [
    {
      id: 1,
      name: 'María González',
      email: 'mgonzalez@ing.uchile.cl',
      rating: 4.8,
      verified: true,
      photo: 'avatar1.jpg',
      trips_completed: 45
    },
    {
      id: 2,
      name: 'Carlos Rodríguez',
      email: 'crodriguez@fcfm.uchile.cl',
      rating: 4.9,
      verified: true,
      photo: 'avatar2.jpg',
      trips_completed: 67
    },
    {
      id: 3,
      name: 'Ana Martínez',
      email: 'amartinez@ing.uchile.cl',
      rating: 4.7,
      verified: true,
      photo: 'avatar3.jpg',
      trips_completed: 23
    }
  ],
  publicTransportTrips: [
    {
      id: 'pt_1',
      creator: 'María González',
      mode: 'Metro',
      line: 'Línea 4',
      station: 'Universidad de Chile',
      direction: 'Puente Alto',
      origin: 'Metro U. de Chile',
      destination: 'FCFM Beauchef',
      time: '14:30',
      spots: 3,
      date: '2024-09-13',
      host_rating: 4.9,
      host_trips: 67,
      meeting_point: 'Entrada principal Metro U. de Chile',
      description: 'Ruta coordinada hacia Beauchef con grupo reducido.',
      participantsTemplate: [
        { id: 'p_carlos', name: 'Carlos Rodríguez', rating: 4.7, trips: 32 },
        { id: 'p_sofia', name: 'Sofía López', rating: 4.9, trips: 18 }
      ]
    },
    {
      id: 'pt_2',
      creator: 'Carlos Rodríguez',
      mode: 'Micro',
      line: 'B16',
      station: 'Paradero FCFM',
      direction: 'Centro',
      origin: 'FCFM',
      destination: 'Metro Baquedano',
      time: '18:15',
      spots: 2,
      date: '2024-09-13',
      host_rating: 4.8,
      host_trips: 54,
      meeting_point: 'Paradero B16 frente a FCFM',
      description: 'Pasaremos por Alameda con parada en Metro Baquedano.',
      participantsTemplate: [
        { id: 'p_maria', name: 'María Torres', rating: 4.6, trips: 21 },
        { id: 'p_antonio', name: 'Antonio Vega', rating: 4.5, trips: 15 }
      ]
    }
  ],
  vehicleTrips: [
    {
      id: 'vt_1',
      driver: 'Ana Martínez',
      vehicle_type: 'Automóvil',
      origin: 'Providencia',
      destination: 'FCFM',
      departure_time: '08:00',
      seats_available: 2,
      donation: 1500,
      route: 'Av. Providencia - Av. Vicuña Mackenna - Av. Beauchef',
      driver_rating: 4.7,
      driver_trips: 45,
      color: 'Azul',
      vehicle_model: 'Yaris',
      plate: 'AB-CD-12',
      day: '2024-09-13',
      date: '2024-09-13',
      meeting_point: 'Metro Los Leones - salida norte',
      description: 'Salgo temprano pasando por Vicuña Mackenna directo a Beauchef.',
      participantsTemplate: [
        { id: 'p_camila', name: 'Camila Díaz', rating: 4.8, trips: 36 },
        { id: 'p_martin', name: 'Martín Salinas', rating: 4.6, trips: 22 }
      ]
    },
    {
      id: 'vt_2',
      driver: 'Carlos Rodríguez',
      vehicle_type: 'Automóvil',
      origin: 'FCFM',
      destination: 'Maipú',
      departure_time: '16:45',
      seats_available: 3,
      donation: 2000,
      route: 'Av. Beauchef - Alameda - Av. Pajaritos',
      driver_rating: 4.9,
      driver_trips: 67,
      color: 'Gris',
      vehicle_model: 'Civic',
      plate: 'EF-GH-34',
      day: '2024-09-13',
      date: '2024-09-13',
      meeting_point: 'Salida principal de Beauchef',
      description: 'Viaje directo por Alameda, posibilidad de dejar en estaciones intermedias.',
      participantsTemplate: [
        { id: 'p_luciana', name: 'Luciana Araya', rating: 5.0, trips: 41 },
        { id: 'p_matias', name: 'Matías Pérez', rating: 4.5, trips: 29 }
      ]
    }
  ],
  safetyReports: [
    {
      id: 'sr_1',
      type: 'unsafe_route',
      location: 'Estación Universidad de Chile - Salida Norte',
      time: '22:30',
      description: 'Zona poco iluminada, presencia de personas sospechosas',
      severity: 'medium',
      date: '2024-09-12',
      anonymous: false
    },
    {
      id: 'sr_2',
      type: 'incident',
      location: 'Paradero B16 frente a FCFM',
      time: '19:45',
      description: 'Intento de robo a estudiante esperando micro',
      severity: 'high',
      date: '2024-09-11',
      anonymous: true
    }
  ]
};

const clientRoutes = [
  '/',
  '/inicio',
  '/transporte-publico',
  '/vehiculo',
  '/mis-viajes',
  '/rutas',
  '/perfil',
  '/configuracion',
  '/registro',
  '/chat'
];

app.use(cors());
app.use(express.json());
app.use(express.static(STATIC_DIR));

app.get('/api/status', (_req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    counts: {
      users: dataStore.users.length,
      publicTransportTrips: dataStore.publicTransportTrips.length,
      vehicleTrips: dataStore.vehicleTrips.length,
      safetyReports: dataStore.safetyReports.length
    }
  });
});

app.get('/api/users', (_req, res) => {
  res.json(dataStore.users);
});

app.get('/api/public-trips', (_req, res) => {
  res.json(dataStore.publicTransportTrips);
});

app.post('/api/public-trips', (req, res) => {
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
  } = req.body || {};

  if (!mode || !origin || !destination || !time || !Number.isInteger(Number(spots))) {
    return res.status(400).json({ message: 'Datos incompletos para crear el viaje.' });
  }

  const tripDate = date || new Date().toISOString().split('T')[0];

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
    spots: Number(spots),
    date: tripDate,
    meeting_point: meetingPoint,
    description
  };

  dataStore.publicTransportTrips.unshift(newTrip);
  res.status(201).json(newTrip);
});

app.get('/api/vehicle-trips', (_req, res) => {
  res.json(dataStore.vehicleTrips);
});

app.post('/api/vehicle-trips', (req, res) => {
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
    routeDuration = null
  } = req.body || {};

  if (!vehicle_type || !origin || !destination || !departure_time || !Number.isInteger(Number(seats_available))) {
    return res.status(400).json({ message: 'Datos incompletos para publicar el viaje.' });
  }

  const travelDay = day || date || new Date().toISOString().split('T')[0];

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
    routeGeoJSON,
    routeStart,
    routeEnd,
    routeDistance,
    routeDuration
  };

  dataStore.vehicleTrips.unshift(newVehicleTrip);
  res.status(201).json(newVehicleTrip);
});

app.get('/api/safety-reports', (_req, res) => {
  res.json(dataStore.safetyReports);
});

app.post('/api/safety-reports', (req, res) => {
  const {
    type,
    location,
    time = '',
    description,
    severity = 'low',
    anonymous = false
  } = req.body || {};

  if (!type || !location || !description) {
    return res.status(400).json({ message: 'Datos incompletos para registrar el reporte.' });
  }

  const newReport = {
    id: nanoid(),
    type,
    location,
    time,
    description,
    severity,
    date: new Date().toISOString().split('T')[0],
    anonymous: Boolean(anonymous)
  };

  dataStore.safetyReports.unshift(newReport);
  res.status(201).json(newReport);
});

clientRoutes.forEach(route => {
  app.get(route, (_req, res) => {
    res.sendFile(INDEX_FILE);
  });
});

app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api')) {
    return next();
  }

  res.sendFile(INDEX_FILE);
});

app.listen(PORT, () => {
  console.log(`Conecta FCFM server listening on http://localhost:${PORT}`);
});
