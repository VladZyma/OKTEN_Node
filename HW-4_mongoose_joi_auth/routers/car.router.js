const router = require('express').Router();

const {carMiddleware} = require('../middlewares');
const {carController} = require('../controllers');

router.post('/', carMiddleware.isCarBodyValid, carController.createCar);
router.get('/',carController.findAllCars);

router.get('/:carId', carController.findCarByIdWithUser);
router.delete('/:carId', carController.deleteCarById);

module.exports = router;
