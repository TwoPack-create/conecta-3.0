const express = require('express');
const asyncHandler = require('../../middleware/asyncHandler');
const controller = require('../../controllers/vehicleTripsController');

const router = express.Router();

router.get('/', asyncHandler(controller.listVehicleTrips));
router.post('/', asyncHandler(controller.createVehicleTrip));

module.exports = router;
