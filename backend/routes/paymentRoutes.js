// backend/routes/paymentRoutes.js
const express = require('express');
const router = express.Router();
const { generateEsewaSignature } = require('../controllers/paymentController');

router.post('/generate-signature', generateEsewaSignature);

module.exports = router;
