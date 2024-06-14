const express = require('express');
const router = express.Router();
const userViewDataAndRecordAttendanceController = require('../controllers/userViewDataAndRecordAttendance');

router.post('/clockIn', userViewDataAndRecordAttendanceController.clockIn);
router.post('/clockOut', userViewDataAndRecordAttendanceController.clockOut);

module.exports = router;