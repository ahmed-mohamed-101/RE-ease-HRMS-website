const express = require('express');

const router = express.Router();

const {signup, login} = require('../controllers/adminAuth');

router.post('/adminSignup', signup);

router.post('/adminLogin', login);

module.exports = router;