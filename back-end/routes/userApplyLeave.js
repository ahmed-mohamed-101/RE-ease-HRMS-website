const express = require('express');
const router = express.Router();
const userApplyLeaveController = require('../controllers/userApplyLeave');

router.post('/applyLeave', userApplyLeaveController.applyLeave);

module.exports = router;