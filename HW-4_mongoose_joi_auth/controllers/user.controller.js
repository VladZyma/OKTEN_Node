const {userService, oauthService, carService} = require('../services');
const ApiError = require("../customError/Api.error");

module.exports = {
    getAllUsers: async (request, response, next) => {
        try {
            const users = await userService.getAllUsers();

            if (!users) {
                throw new ApiError('Users not found', 404);
            }

            response.status(200).json(users);
        } catch (e) {
            next(e);
        }
    },
    getUserById: async (request, response, next) => {
        try {
            const {userId} = request.params;
            const user = await userService.getUserById(userId);

            if (!user) {
                throw new ApiError('User not found', 404);
            }

            response.status(200).json(user);
        } catch (e) {
            next(e);
        }
    },
    getUserByIdWithCar: async (request, response, next) => {
        try {
            const {userId} = request.params;
            const user = await userService.getUserByIdWithCar(userId);

            response.status(200).json(user);
        } catch(e) {
            next(e);
        }
    },
    createUser: async (request, response, next) => {
        try {
            const hashPassword = await oauthService.hashPassword(request.body.password);

            const newUser = {...request.body, password: hashPassword};

            const user = await userService.createUser(newUser);

            response.status(201).json(user);
        } catch (e) {
            next(e);
        }
    },
    updateUserById: async (request, response, next) => {
        try {
            const newUserInfo = request.body;
            const {userId} = request.params;

            const updatedUser = await userService.updateUserById(userId, newUserInfo);

            response.status(201).json(updatedUser);
        } catch (e) {
            next(e);
        }
    },
    deleteUserById: async (request, response, next) => {
        try {
            const {userId} = request.params;

            await userService.deleteUserById(userId);

            response.status(204).json('User deleted');
        } catch (e) {
            next(e);
        }
    },
};
