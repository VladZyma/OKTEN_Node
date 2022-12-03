const {carValidator} = require('../validators');
const ApiError = require('../customError/Api.error');

module.exports = {
    isCarBodyValid: async (request, response, next) => {
        try {
            const car = request.body;
            const validate = carValidator.isCarBodyValid.validate(car);

            if (validate.error) {
                throw new ApiError('Car is not valid', 400);
            }

            request.car = car;

            next();
        } catch (e) {
            next(e);
        }
    },
};
