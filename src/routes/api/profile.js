const express = require('express');
const asyncHandler = require('../../middleware/asyncHandler');
const controller = require('../../controllers/profileController');

const router = express.Router();

router.get('/', asyncHandler(controller.getProfile));
router.patch('/', asyncHandler(controller.updateProfile));

module.exports = router;
