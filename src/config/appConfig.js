const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..', '..');
const STATIC_DIR = ROOT_DIR;
const INDEX_FILE = path.join(ROOT_DIR, 'index.html');
const CLIENT_ROUTES = [
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

module.exports = {
  PORT: Number(process.env.PORT) || 3000,
  ROOT_DIR,
  STATIC_DIR,
  INDEX_FILE,
  CLIENT_ROUTES,
  API_PREFIX: '/api'
};
