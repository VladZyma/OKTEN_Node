require('dotenv').config();

module.exports = {
    PORT: process.env.PORT || 5000,
    MONGO_DB: process.env.MONGO_DB || 'mongodb://localhost:27017',
    ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET || 'accessTokenSecret',
    REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET || 'refreshTokenSecret',
};