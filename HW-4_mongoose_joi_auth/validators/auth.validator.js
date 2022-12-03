const Joi = require('joi');
const {userRegexp} = require("../configs");

module.exports = {
    loginValidator: Joi.object({
        email: Joi.string().regex(userRegexp.EMAIL).lowercase().trim().required(),
        password: Joi.string().regex(userRegexp.PASSWORD).required(),
    }),
};
