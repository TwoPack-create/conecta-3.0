const express = require('express');
const asyncHandler = require('../../middleware/asyncHandler');
const controller = require('../../controllers/userTripsController');

const router = express.Router();

router.get('/', asyncHandler(controller.listUserTrips));
router.post('/', asyncHandler(controller.createUserTrip));
router.patch('/:id', asyncHandler(controller.updateUserTrip));

module.exports = router;
