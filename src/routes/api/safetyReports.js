const express = require('express');
const asyncHandler = require('../../middleware/asyncHandler');
const controller = require('../../controllers/safetyReportsController');

const router = express.Router();

router.get('/', asyncHandler(controller.listSafetyReports));
router.post('/', asyncHandler(controller.createSafetyReport));
router.post('/:id/votes', asyncHandler(controller.voteSafetyReport));

module.exports = router;
