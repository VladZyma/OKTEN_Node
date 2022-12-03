const {
    newUserValidator: {newUserValidator, updatedUserValidator},
    commonValidators:{idValidator}
} = require('../validators');
const {userNameNormalizator} = require('../helper');

const ApiError = require("../customError/Api.error");
const {userService} = require("../services");
const {User} = require("../dataBase");

module.exports = {
    isUserBodyValid: async (request, response, next) => {
        try {
            const user = request.body;

            const userName = userNameNormalizator.normalize(user.name);

            const validate = await newUserValidator.validate({...user, name: userName});

            if (validate.error) {
                throw new ApiError(validate.error.message, 400);
            }

            request.body = validate.value;

            next();
        } catch (e) {
            next(e);
        }
    },
    isUserExists: async (request, response, next) => {
        try {
            const {userId} = request.params;

            const user = await userService.updateUserById(userId);

            if (!user) {
                throw new ApiError('User not found', 404);
            }

            next();
        } catch (e) {
            console.log(e);
        }
    },
    isUpdatingUserValid: async (request, response, next) => {
        try {
            const newUserInfo = request.body;

            const validate = updatedUserValidator.validate(newUserInfo);

            if (validate.error) {
                throw new ApiError(validate.error.message, 400);
            }

            request.body = validate.value;

            next();
        } catch (e) {
            next(e);
        }
    },
    isUserEmailUnique: async (request, response, next) => {
       try {
           const {email} = request.body;

           const user = await userService.getUserByEmail(email);

           if (user) {
               throw new ApiError('User with such email already exists', 400);
           }

           next();
       } catch (e) {
           next(e);
       }
    },
    isUserIdValid: async (request, response, next) => {
        try {
            const {userId} = request.params;

            const validate = await idValidator.validate(userId);

            if (validate.error) {
                throw new ApiError(validate.error.message, 400);
            }

            next();
        } catch (e) {
            next(e);
        }
    },

    findUserDynamically: (fieldName, from = 'body', dbField = fieldName) => async (request, response, next) => {
        try {
            const fieldToSearch = request[from][fieldName];

            const user = await User.findOne({[dbField]: fieldToSearch});

            if (!user) {
                throw new ApiError('User not found', 404);
            }

            request.user = user;

            next();
        } catch (e) {
            next(e);
        }
    },
};
