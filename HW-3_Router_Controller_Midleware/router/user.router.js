const router = require('express').Router();

const userController = require('../controller/user.controller');
const userMiddleware = require('../middleware/user.middleware');

router.get('/', userController.getAllUsers);
router.post('/', userController.addUser);

router.get('/:userId', userMiddleware.checkIsUserExists, userController.getUserById);
router.put('/:userId', userMiddleware.checkIsUserExists, userController.updateUserById);
router.delete('/:userId', userMiddleware.checkIsUserExists, userController.deleteUserById);

module.exports = router;
