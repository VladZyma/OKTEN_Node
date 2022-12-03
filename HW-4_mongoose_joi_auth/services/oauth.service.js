const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const ApiError = require('../customError/Api.error');
const {configs} = require('../configs');

module.exports = {
    hashPassword: (password) => bcrypt.hash(password, 10),

    comparePasswords: async (hashPassword, password) => {
        const isPasswordsSame = await bcrypt.compare(password, hashPassword);

        if (!isPasswordsSame) {
            throw new ApiError('Wrong email or password', 400);
        }
    },

    generateAccessTokenPair: (dataToSign = {}) => {
        const accessToken = jwt.sign(dataToSign, configs.ACCESS_TOKEN_SECRET, {expiresIn: '1m'});
        const refreshToken = jwt.sign(dataToSign, configs.REFRESH_TOKEN_SECRET, {expiresIn: '2m'});

        return {accessToken, refreshToken}
    },
};
