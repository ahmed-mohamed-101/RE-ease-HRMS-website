const express = require('express');

const router = express.Router();

const {monthly,annually} = require('../controllers/payment');

router.post("/monthly", monthly);

router.post("/annually", annually);


module.exports = router;