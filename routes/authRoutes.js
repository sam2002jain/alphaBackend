const express = require('express');
const { signUp, signIn, getData } = require('../controllers/authController');

const router = express.Router();

// Routes
router.post('/signup', signUp);
router.post('/signin', signIn);
router.get('/cdata',getData);

module.exports = router;
