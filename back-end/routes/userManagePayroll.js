const express = require('express');
const router = express.Router();
const userManagePayrollController = require('../controllers/userManagePayroll');

router.post('/search', userManagePayrollController.search);
router.post('/showAll', userManagePayrollController.showAll);
router.get('/getPayslip/:id', userManagePayrollController.getPayslip);

module.exports = router;