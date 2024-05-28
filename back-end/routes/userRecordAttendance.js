const express = require('express');
const router = express.Router();
const userRecordAttendance = require('../controllers/userRecordAttendance');

router.post('/clockIn', userRecordAttendance.clockIn);
router.post('/clockOut', userRecordAttendance.clockOut);

module.exports = router;