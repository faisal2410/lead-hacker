const express = require('express');
const router = express.Router();

// import middlewares
const { requireSignin, authMiddleware, adminMiddleware } = require('../controllers/auth');
// import validator
const { userUpdateValidator } = require("../middlewares/auth");
const { runValidation } = require("../middlewares/index");

// import controllers
const { read, update } = require('../controllers/user');

// routes
router.get('/user', requireSignin, authMiddleware, read);
router.get('/admin', requireSignin, adminMiddleware, read);
router.put('/user', userUpdateValidator, runValidation, requireSignin, authMiddleware, update);

module.exports = router;
