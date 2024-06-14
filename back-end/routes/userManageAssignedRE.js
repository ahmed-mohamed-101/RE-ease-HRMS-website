const express = require('express');
const router = express.Router();
const userManageAssignedREController = require('../controllers/userManageAssignedRE');

router.post('/search', userManageAssignedREController.search);
router.post('/showAll', userManageAssignedREController.showAll);
router.post('/changeStatus/:id', userManageAssignedREController.changeStatus);
router.get('/viewDocument/:id',userManageAssignedREController.viewDocument);



module.exports = router;