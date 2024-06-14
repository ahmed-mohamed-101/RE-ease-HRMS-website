const express = require('express');
const router = express.Router();
const adminManageAttendanceController = require('../controllers/adminManageAttendance');

router.post('/search', adminManageAttendanceController.search);
router.post('/showAll', adminManageAttendanceController.showAll);
router.get('/getAttendance/:id', adminManageAttendanceController.getAttendance);
router.post('/editAttendance/:id', adminManageAttendanceController.editAttendance);

module.exports = router;