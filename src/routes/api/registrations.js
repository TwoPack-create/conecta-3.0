const express = require('express');
const asyncHandler = require('../../middleware/asyncHandler');
const controller = require('../../controllers/registrationController');

const router = express.Router();

router.post('/', asyncHandler(controller.createRegistration));

module.exports = router;
