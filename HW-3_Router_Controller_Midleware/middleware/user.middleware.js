const path = require('path');
const fs = require('fs/promises');

const CustomError = require('../customError/customError');

const userDbPath = path.join(process.cwd(), 'dataBase', 'users.json');

const checkIsUserExists = async (request, response, next) => {
    try {
        const {userId} = request.params;

        const buffer = await fs.readFile(userDbPath);
        const users = JSON.parse(buffer.toString());

        const user = users.find(user => user.id === +userId);

        if (!user) {
            throw new CustomError('User not found', 404);
        }

        request.user = user;
        request.users = users;

        next();
    } catch (e) {
        next(e);
    }
};

module.exports = {
    checkIsUserExists,
};
