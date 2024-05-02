// routes/otherRoutes.js

const express = require('express');
const router = express.Router();
const otherController = require('../controllers/otherController');

// Define other routes
router.get('/other', otherController.otherRoute);

module.exports = router;
