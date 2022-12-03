const {authValidator} = require('../validators');
const ApiError = require("../customError/Api.error");

module.exports = {
    isEmailPasswordValid: async (request, response, next) => {
        try {
            const emailPassword = request.body;

            let validate = await authValidator.loginValidator.validate(emailPassword);

            if (validate.error) {
                throw new ApiError(validate.error.message, 400);
            }

            next();
        } catch (e) {
            next(e);
        }
    },
};
