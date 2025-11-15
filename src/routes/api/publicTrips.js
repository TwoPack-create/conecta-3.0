const express = require('express');
const asyncHandler = require('../../middleware/asyncHandler');
const controller = require('../../controllers/publicTripsController');

const router = express.Router();

router.get('/', asyncHandler(controller.listPublicTrips));
router.post('/', asyncHandler(controller.createPublicTrip));

module.exports = router;
