const {Car} = require('../dataBase');

module.exports = {
    createCar: async (car) => {
       const newCar = await Car.create(car);
       return newCar;
    },
    findAllCars: async () => {
        const cars = await Car.find({});
        return cars;
    },
    findCarByIdWithUser: async (id) => {
        const car = await Car.findById(id).populate('_user');
        return car;
    },
    deleteCarById: async (id) => {
        await Car.findByIdAndDelete(id);
    },
};
