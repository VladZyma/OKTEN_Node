const Joi = require('joi');

const {userRegexp} = require('../configs');

module.exports = {
    idValidator: Joi.string().regex(userRegexp.MONGO_ID),
}