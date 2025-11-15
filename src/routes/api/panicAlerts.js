const express = require('express');
const asyncHandler = require('../../middleware/asyncHandler');
const controller = require('../../controllers/panicAlertsController');

const router = express.Router();

router.get('/', asyncHandler(controller.listPanicAlerts));
router.post('/', asyncHandler(controller.createPanicAlert));

module.exports = router;
