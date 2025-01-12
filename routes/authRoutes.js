const express = require('express');
const { signUp, signIn } = require('../controllers/authController');
const { getDocument } = require('../controllers/documentController');

const router = express.Router();

// Routes
router.post('/signup', signUp);
router.post('/signin', signIn);
router.post('/docdata', getDocument);
router.get('/addtask', addDocument);


module.exports = router;
