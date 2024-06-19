const express = require('express');
const router = express.Router();
const userDashboardController = require('../controllers/userDashboard');

router.post('/dashboard', userDashboardController.dashboard);

module.exports = router;