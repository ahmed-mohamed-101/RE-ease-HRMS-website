const express = require('express');
const router = express.Router();
const adminManageREController = require('../controllers/adminManageRE');

router.post('/showAll', adminManageREController.showAll);
router.post('/search', adminManageREController.search);
router.post('/addRE', adminManageREController.addRE);
router.get('/getRE/:id', adminManageREController.getRE);
router.post('/editRE/:id', adminManageREController.editRE);
router.get('/deleteRE/:id',adminManageREController.deleteRE);
router.get('/viewDocument/:id',adminManageREController.viewDocument);

module.exports = router;