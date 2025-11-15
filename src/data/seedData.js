const users = [
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
];

const publicTransportTrips = [
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
];

const vehicleTrips = [
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
];

const safetyReports = [
  {
    id: 'sr_1',
    type: 'unsafe_route',
    location: 'Estación Universidad de Chile - Salida Norte',
    time: '22:30',
    description: 'Zona poco iluminada, presencia de personas sospechosas',
    severity: 'medium',
    date: '2024-09-12',
    anonymous: false,
    votes: 12
  },
  {
    id: 'sr_2',
    type: 'incident',
    location: 'Paradero B16 frente a FCFM',
    time: '19:45',
    description: 'Intento de robo a estudiante esperando micro',
    severity: 'high',
    date: '2024-09-11',
    anonymous: true,
    votes: -3
  }
];

const chatThreads = {
  pt_1: [
    {
      id: 'msg_pt_1_1',
      senderId: 1,
      senderName: 'María González',
      text: 'Hola a todos, nos juntamos en la entrada del Metro.',
      timestamp: '2024-09-13T13:50:00Z'
    },
    {
      id: 'msg_pt_1_2',
      senderId: 2,
      senderName: 'Carlos Rodríguez',
      text: 'Perfecto, llegaré 5 minutos antes.',
      timestamp: '2024-09-13T13:55:00Z'
    }
  ],
  vt_1: [
    {
      id: 'msg_vt_1_1',
      senderId: 3,
      senderName: 'Ana Martínez',
      text: 'Por favor confirmen si necesitan espacio para mochilas.',
      timestamp: '2024-09-13T07:15:00Z'
    }
  ]
};

const userTrips = {
  active: [],
  completed: []
};

const panicAlerts = [
  {
    id: 'pa_1',
    triggeredBy: 'Central Beauchef',
    triggeredAt: '2024-09-12T23:10:00Z',
    countdown: 5,
    recipients: ['carabineros', 'guardiaMunicipal', 'contacts'],
    location: {
      lat: -33.451,
      lng: -70.664,
      accuracy: 35
    },
    status: 'resolved',
    notes: 'Alerta de prueba coordinada con seguridad FCFM.',
    config: {
      sound: true
    }
  }
];

const registrations = [];

module.exports = {
  users,
  publicTransportTrips,
  vehicleTrips,
  safetyReports,
  chatThreads,
  userTrips,
  panicAlerts,
  registrations
};
