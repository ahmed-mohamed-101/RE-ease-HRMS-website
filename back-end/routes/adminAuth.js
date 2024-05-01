const express = require('express');

const router = express.Router();

const { body, validationResult } = require('express-validator');

const admin = require('../models/admin');

const adminAuth = require('../controllers/adminAuth');

router.post('/adminSignup',
  [
    body('name').trim().not().isEmpty(),
    body('email')
      .isEmail()
      .withMessage('Please enter a valid email.')
      .custom(async (email) => {
        const Admin = await admin.find(email);
        if (Admin[0].length > 0) {
          return Promise.reject('Email address already exist!');
        }
      })
      .normalizeEmail(),
    body('password').trim().isLength({ min: 7 }),
    body('company_name').trim().not().isEmpty(),
    (req, res) => {
      const result = validationResult(req);
      if (!result.isEmpty()) {
        return res.send({ errors: result.array() });
      }
    }
  ], adminAuth.signup);

router.post('/adminLogin', adminAuth.login);

module.exports = router;