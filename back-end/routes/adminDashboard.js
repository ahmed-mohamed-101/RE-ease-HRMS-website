const express = require('express');
const router = express.Router();
const adminDashboardController = require('../controllers/adminDashboard');

router.post('/dashboard', adminDashboardController.dashboard);

module.exports = router;