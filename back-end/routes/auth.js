const express = require('express');

const router = express.Router();

const auth = require('../controllers/auth');

router.post('/adminSignup', auth.adminSignup);
router.post('/adminLogin', auth.adminLogin);
router.post('/userLogin', auth.userLogin);

module.exports = router;