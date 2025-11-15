const PUBLIC_TRANSPORT_MODES = ['Metro', 'Micro', 'A pie'];

const METRO_LINES = [
  'Línea 1 - Roja',
  'Línea 2 - Amarilla',
  'Línea 3 - Café',
  'Línea 4 - Azul',
  'Línea 4A - Celeste',
  'Línea 5 - Verde',
  'Línea 6 - Morada'
];

const MODE_LABELS = {
  metro: 'Metro',
  micro: 'Micro',
  'a pie': 'A pie'
};

const VEHICLE_TYPES = ['Automóvil', 'Motocicleta', 'Van', 'Camioneta', 'Moto'];

const MAX_PUBLIC_TRIP_LIMIT = 50;
const DEFAULT_PUBLIC_TRIP_LIMIT = 12;

const MAX_VEHICLE_TRIP_LIMIT = 50;
const DEFAULT_VEHICLE_TRIP_LIMIT = 12;

module.exports = {
  PUBLIC_TRANSPORT_MODES,
  METRO_LINES,
  MODE_LABELS,
  VEHICLE_TYPES,
  DEFAULT_PUBLIC_TRIP_LIMIT,
  MAX_PUBLIC_TRIP_LIMIT,
  DEFAULT_VEHICLE_TRIP_LIMIT,
  MAX_VEHICLE_TRIP_LIMIT
};
