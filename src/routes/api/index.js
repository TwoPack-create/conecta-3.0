const express = require('express');
const publicTripsRouter = require('./publicTrips');
const vehicleTripsRouter = require('./vehicleTrips');
const safetyReportsRouter = require('./safetyReports');
const usersRouter = require('./users');
const statusRouter = require('./status');
const userTripsRouter = require('./userTrips');
const chatsRouter = require('./chats');
const panicAlertsRouter = require('./panicAlerts');
const profileRouter = require('./profile');
const registrationsRouter = require('./registrations');

const router = express.Router();

router.use('/public-trips', publicTripsRouter);
router.use('/vehicle-trips', vehicleTripsRouter);
router.use('/safety-reports', safetyReportsRouter);
router.use('/users', usersRouter);
router.use('/status', statusRouter);
router.use('/user-trips', userTripsRouter);
router.use('/chats', chatsRouter);
router.use('/panic-alerts', panicAlertsRouter);
router.use('/profile', profileRouter);
router.use('/registrations', registrationsRouter);

module.exports = router;
