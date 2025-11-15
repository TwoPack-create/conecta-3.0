# Conecta FCFM 3.0

## Requisitos

- Node.js 18 o superior

## Puesta en marcha

```bash
npm install
npm run dev
```

`npm run dev` levanta `nodemon` y expone la aplicación en `http://localhost:3000`. Para entorno productivo:

```bash
npm start
```

## Backend ligero

- Sirve los archivos estáticos (`index.html`, `style.css`, `app.js`) y todas las rutas amigables (`/inicio`, `/vehiculo`, etc.) para permitir recargas directas sin errores.
- Expone la API REST bajo `/api`:
  - `GET /api/status`
  - `GET /api/users`
  - `GET /api/public-trips`
  - `POST /api/public-trips`
  - `GET /api/vehicle-trips`
  - `POST /api/vehicle-trips`
  - `GET /api/safety-reports`
  - `POST /api/safety-reports`
  - `GET /api/user-trips`
  - `POST /api/user-trips`
  - `PATCH /api/user-trips/:id`
  - `GET /api/chats/:tripId/messages`
  - `POST /api/chats/:tripId/messages`
- Valida la entrada antes de delegar en los servicios y responde con errores consistentes (`status`, `message`, `details`).

### `/api/public-trips`

Las respuestas siguen el formato:

```json
{
  "data": [ /* viajes */ ],
  "meta": {
    "total": 24,
    "limit": 12,
    "offset": 0,
    "filters": {
      "mode": "Metro",
      "date": null,
      "from": null,
      "to": null
    },
    "generatedAt": "2025-11-09T21:10:00.000Z"
  }
}
```

Parámetros soportados:

| Parámetro | Descripción |
|-----------|-------------|
| `mode`    | `Metro`, `Micro` o `A pie`. |
| `date`    | Fecha exacta (`YYYY-MM-DD`). |
| `from`    | Fecha inicial (`YYYY-MM-DD`). |
| `to`      | Fecha final (`YYYY-MM-DD`). |
| `limit`   | Máximo de registros (1-50, default 12). |
| `page`    | Página (>=1). |

Las peticiones `POST /api/public-trips` requieren `mode`, `origin`, `destination`, `time` (HH:MM) y `spots`.

### `/api/vehicle-trips`

- Responde con `{ data, meta }` usando los mismos campos que transporte público.
- Acepta filtros `type`, `date`, `seatsMin`, `donationMax`, además de `limit` y `page`.
- Los `POST` requieren `vehicle_type`, `origin`, `destination`, `departure_time` y `seats_available`.

### `/api/user-trips`

- `GET /api/user-trips` devuelve `{ active: [...], completed: [...] }` para poblar “Mis viajes”.
- `POST /api/user-trips` registra la participación de un usuario (host o pasajero).
- `PATCH /api/user-trips/:id` sincroniza estados (en curso, completado, etc.).
- Campos mínimos: `tripType`, `referenceId`, `title`, `origin`, `destination`, `date`, `time`.

## Arquitectura

```
server.js
├─ src/config           → constantes de rutas, puertos y archivos estáticos
├─ src/controllers      → controladores Express (por ejemplo, publicTripsController)
├─ src/middleware       → utilidades como asyncHandler
├─ src/data             → provider de datos en memoria + semillas
├─ src/services         → reglas de negocio para viajes, reportes y usuarios
└─ src/routes/api       → routers Express por dominio (/public-trips, /vehicle-trips, etc.)
```

El provider actual (`src/data/providers/inMemoryProvider.js`) implementa una interfaz asíncrona (métodos `getUsers`, `listPublicTrips`, `createVehicleTrip`, etc.). Para conectar una base real basta con crear un nuevo provider con los mismos métodos y exportarlo desde `src/data/index.js`.

## Modelo de datos inicial

- **Usuarios**: identificador, nombre, correo institucional, rating y conteo de viajes.
- **Viajes de transporte público**: modo, línea/paradero, origen/destino, cupos, horarios y punto de encuentro.
- **Viajes en vehículo**: datos del conductor, vehículo, horarios, donación sugerida y geo-información de la ruta.
- **Reportes de seguridad**: tipo, severidad, ubicación, descripción, anonimato y votos comunitarios.

Las semillas viven en `src/data/seedData.js` para facilitar las pruebas mientras se integra un motor de persistencia definitivo.
- **Chat de viajes**: utiliza `GET/POST /api/chats/:tripId/messages` para sincronizar las conversaciones in-app.
