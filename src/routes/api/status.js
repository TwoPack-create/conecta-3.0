const express = require('express');
const userService = require('../../services/userService');

const router = express.Router();

router.get('/', async (_req, res, next) => {
  try {
    const snapshot = await userService.getStatusSnapshot();
    res.json(snapshot);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
