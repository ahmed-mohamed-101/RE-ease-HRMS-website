const express = require('express');

const router = express.Router();

const {monthly,annually,confirmPayment} = require('../controllers/payment');

router.post("/monthly", monthly);

router.post("/annually", annually);

router.post("/confirmPayment", confirmPayment)


module.exports = router;