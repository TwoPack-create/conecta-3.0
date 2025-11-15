const express = require('express');
const cors = require('cors');
const apiRouter = require('./src/routes/api');
const {
  PORT,
  STATIC_DIR,
  INDEX_FILE,
  CLIENT_ROUTES,
  API_PREFIX
} = require('./src/config/appConfig');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(STATIC_DIR));

app.use(API_PREFIX, apiRouter);

CLIENT_ROUTES.forEach(route => {
  app.get(route, (_req, res) => {
    res.sendFile(INDEX_FILE);
  });
});

app.get('*', (req, res, next) => {
  if (req.path.startsWith(API_PREFIX)) {
    return next();
  }
  res.sendFile(INDEX_FILE);
});

app.use((err, _req, res, _next) => {
  console.error('[API ERROR]', err);
  const status = err.status || 500;
  res.status(status).json({
    message: err.message || 'Error interno del servidor.',
    details: err.details || undefined
  });
});

app.listen(PORT, () => {
  console.log(`Conecta FCFM server listening on http://localhost:${PORT}`);
});
