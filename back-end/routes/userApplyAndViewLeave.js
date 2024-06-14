const express = require('express');
const router = express.Router();
const userApplyAndViewLeaveController = require('../controllers/userApplyAndViewLeave');

router.post('/applyLeave', userApplyAndViewLeaveController.applyLeave);
router.post('/search', userApplyAndViewLeaveController.search);
router.post('/showAll', userApplyAndViewLeaveController.showAll);
router.get('/getDescription/:id', userApplyAndViewLeaveController.getDescription);

module.exports = router;