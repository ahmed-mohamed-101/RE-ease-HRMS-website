const express = require('express');

const router = express.Router();

const payment = require('../controllers/payment');

router.post("/monthly", payment.monthly);

router.post("/annually", payment.annually);

router.post("/confirmPayment", payment.confirmPayment)


module.exports = router;