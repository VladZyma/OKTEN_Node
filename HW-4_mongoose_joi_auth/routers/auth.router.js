const router = require('express').Router();

const {authController} = require('../controllers');
const {authMiddleware, userMiddleware} = require('../middlewares');

router.post('/login',authMiddleware.isEmailPasswordValid, userMiddleware.findUserDynamically('email'), authController.login);

module.exports = router;
