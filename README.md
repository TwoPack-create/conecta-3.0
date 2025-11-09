# Conecta FCFM 3.0

## Requisitos

- Node.js 18+

## Puesta en marcha

```bash
npm install
npm run dev
```

El comando anterior inicia `nodemon` y expone la app en `http://localhost:3000`. Para entorno productivo usa:

```bash
npm start
```

## Funcionalidades del backend ligero

- Sirve los archivos estáticos (`index.html`, `style.css`, `app.js`) y resuelve todas las rutas amigables (`/inicio`, `/vehiculo`, etc.) para que el navegador pueda recargar sin errores.
- Expone la API REST bajo `/api` para viajes de transporte público, viajes en vehículo y reportes de seguridad:
  - `GET /api/public-trips`
  - `POST /api/public-trips`
  - `GET /api/vehicle-trips`
  - `POST /api/vehicle-trips`
  - `GET /api/safety-reports`
  - `POST /api/safety-reports`
- Al enviar formularios desde la UI estos endpoints crean el viaje o reporte y actualizan las cards en pantalla.
