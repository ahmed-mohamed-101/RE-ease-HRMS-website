const express = require('express');
const router = express.Router();
const adminManageUsersController = require('../controllers/adminManageUsers');

router.post('/showAll', adminManageUsersController.showAll);
router.post('/search', adminManageUsersController.search);
router.post('/addUser', adminManageUsersController.addUser);
router.get('/getUser/:id', adminManageUsersController.getUser);
router.post('/editUser/:id', adminManageUsersController.editUser);
router.get('/deleteUser/:id',adminManageUsersController.deleteUser);

module.exports = router;