const router = require('express').Router();

const {userController} = require('../controllers');
const {userMiddleware} = require('../middlewares');

router.get(
    '/',
    userController.getAllUsers
);

router.post(
    '/',
    userMiddleware.isUserBodyValid,
    userMiddleware.isUserEmailUnique,
    userController.createUser
);

router.get(
    '/:userId',
    userMiddleware.isUserIdValid,
    userController.getUserByIdWithCar,
);

router.put(
    '/:userId',
    userMiddleware.isUserIdValid,
    userMiddleware.isUserExists,
    userMiddleware.isUpdatingUserValid,
    userController.updateUserById
);

router.delete(
    '/:userId',
    userMiddleware.isUserIdValid,
    userMiddleware.isUserExists,
    userController.deleteUserById,
);

module.exports = router;
