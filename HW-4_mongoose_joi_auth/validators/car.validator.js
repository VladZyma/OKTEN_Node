const Joi = require('joi');

const {userRegexp} = require('../configs')

module.exports = {
    isCarBodyValid: Joi.object({
        model: Joi.string().min(3).max(20).required(),
        price: Joi.number().min(100).max(1000000000).required(),
        year: Joi.number().min(1995).max(new Date().getFullYear()).required(),
        _user: Joi.string().regex(userRegexp.MONGO_ID).required(),
    }),
};
