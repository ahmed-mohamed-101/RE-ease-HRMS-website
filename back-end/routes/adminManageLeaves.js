const express = require('express');
const router = express.Router();
const adminManageLeaves = require('../controllers/adminManageLeaves');

router.post('/showAll', adminManageLeaves.showAll);
router.post('/search', adminManageLeaves.search);
router.post('/changeStatus/:id', adminManageLeaves.changeStatus);
router.get('/getDescription/:id', adminManageLeaves.getDescription);
router.get('/deleteLeave/:id',adminManageLeaves.deleteLeave);

module.exports = router;