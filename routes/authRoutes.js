const express = require('express');
const { signUp, signIn } = require('../controllers/authController');
const { setDocument, getDocument } = require('../controllers/documentController');

const router = express.Router();

// Routes
router.post('/signup', signUp);
router.post('/signin', signIn);
router.post('/docdata', setDocument);
router.get('/addtask', getDocument);


module.exports = router;
