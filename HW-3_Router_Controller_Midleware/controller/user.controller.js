const fs = require('fs/promises');
const path = require('path');

const userDbPath = path.join(process.cwd(), 'dataBase', 'users.json');

const getAllUsers = async (request, response) => {

    try {
        console.log(userDbPath);
        const buffer = await fs.readFile(userDbPath);
        const users = JSON.parse(buffer.toString());

        response.status(200).json(users);
    } catch (e) {
        console.log(e);
    }

};

const getUserById = async (request, response) => {

    try {
        // const {userId} = request.params;
        //
        // const buffer = await fs.readFile(userDbPath);
        // const users = JSON.parse(buffer.toString());
        //
        // const user = users.find(user => user.id === +userId);

        const user = request.user; // получил из middleware

        response.status(200).json(user);

    } catch (e) {
        console.log(e);
    }

};

const addUser = async (request, response) => {

    try {
        const user = request.body;

        const buffer = await fs.readFile(userDbPath);
        const users = JSON.parse(buffer.toString());

        const newUser = {id: users[users.length - 1].id + 1, ...user};

        users.push(newUser);

        await fs.writeFile(userDbPath, JSON.stringify(users));

        response.json(newUser);

    } catch (e) {
        console.log(e);
    }

};

const updateUserById = async (request, response) => {
    try {
        // const {userId} = request.params;
        const updatedUser = request.body;


        // const buffer = await fs.readFile(userDbPath);
        // const users = JSON.parse(buffer.toString());
        const users = request.users;

        // const userForUpdate = users.find(user => user.id === +userId);
        const userForUpdate = request.user;
        Object.assign(userForUpdate, updatedUser);

        await fs.writeFile(userDbPath, JSON.stringify(users));

        response.status(201).json(userForUpdate);

    } catch (e) {
        console.log(e);
    }

};

const deleteUserById = async (request, response) => {
    try {
        // const {userId} = request.params;
        const userForDel = request.user;

        // const buffer = await fs.readFile(userDbPath);
        // const users = JSON.parse(buffer.toString());
        const users = request.users;

        // const userIndex = users.findIndex(user => user.id === +userId);
        const userIndex = users.findIndex(user => user === userForDel);
        users.splice(userIndex, 1);

        await fs.writeFile(userDbPath, JSON.stringify(users));

        response.json(`User with id deleted`);
    } catch (e) {
        console.log(e);
    }

};


module.exports = {
    getAllUsers,
    getUserById,
    addUser,
    updateUserById,
    deleteUserById,
};
