const express = require('express');
const { signUp, signIn } = require('../controllers/authController');
const { document } = require('../controllers/documentController');


const router = express.Router();

// Routes
router.post('/signup', signUp);
router.post('/signin', signIn);
router.get('/cdata',document);

module.exports = router;
