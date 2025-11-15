const express = require('express');
const asyncHandler = require('../../middleware/asyncHandler');
const controller = require('../../controllers/chatController');

const router = express.Router();

router.get('/:tripId/messages', asyncHandler(controller.listMessages));
router.post('/:tripId/messages', asyncHandler(controller.postMessage));

module.exports = router;
