const Joi = require('joi');

const {userRegexp} = require('../configs');

module.exports = {
    newUserValidator: Joi.object({
        name: Joi.string().min(3).max(20).required(),
        age: Joi.number().integer().min(1).max(120),
        email: Joi.string().regex(userRegexp.EMAIL).lowercase().trim().required(),
        password: Joi.string().regex(userRegexp.PASSWORD).required(),
    }),
    updatedUserValidator: Joi.object({
        name: Joi.string().min(3).max(20).optional(),
        age: Joi.number().integer().min(1).max(120).optional(),
        email: Joi.string().regex(userRegexp.EMAIL).lowercase().trim().optional(),
    }),
};
