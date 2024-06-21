const express = require('express');
const router = express.Router();
const adminManagePayrollController = require('../controllers/adminManagePayroll');

router.post('/generate', adminManagePayrollController.generate);
// router.post('/generatePyaroll', adminManagePayrollController.generatePyaroll);
router.post('/search', adminManagePayrollController.search);
router.post('/showAll', adminManagePayrollController.showAll);
router.get('/pay/:id', adminManagePayrollController.pay);
router.get('/delete/:id', adminManagePayrollController.delete);

module.exports = router;