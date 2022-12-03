const {carService} = require('../services');
const ApiError = require("../customError/Api.error");


module.exports = {
    createCar: async (request, response, next) => {
        const car = request.car;

        const newCar = await carService.createCar(car);

        response.status(201).json(newCar);
    },
    findAllCars: async (request, response, next) => {
        try {
            const cars = await carService.findAllCars();

            if (!cars) {
                throw new ApiError('Cars not found', 404);
            }

            response.status(200).json(cars);
        } catch (e) {
            next(e);
        }
    },
    findCarByIdWithUser: async (request, response, next) => {
        try {
            const {carId} = request.params;

            const car = await carService.findCarByIdWithUser(carId);

            if (!car) {
                throw new ApiError('Cars not found', 404);
            }

            response.status(200).json(car);
        } catch (e) {
            next(e);
        }
    },
    deleteCarById: async (request, response, next) => {
        try {
            const {carId} = request.params;
            await carService.deleteCarById(carId);

            response.status(204).json('Deleted');
        }catch (e) {
            next(e);
        }
    },
};
