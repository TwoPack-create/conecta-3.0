const express = require('express');
const userService = require('../../services/userService');

const router = express.Router();

router.get('/', async (_req, res, next) => {
  try {
    const users = await userService.getUsers();
    res.json(users);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
