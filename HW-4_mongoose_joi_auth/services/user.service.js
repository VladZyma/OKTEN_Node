const {User} = require('../dataBase');

module.exports = {
    getAllUsers: async () => {
        try {
            const users = await User.find({});
            return users;
        } catch (e) {
            console.log(e);
        }
    },
    getUserById: async (id) => {
        const user = await User.findById(id);
        return user;
    },
    getUserByEmail: async (userEmail) => {
        const user = await User.findOne({email: userEmail});
        return user;
    },
    getUserByIdWithCar: async (id) => {
        const user = await User.aggregate([
            {$match: {_id: id} },
            {$lookup: {from: 'cars', localField: '_id', foreignField: '_user', as: 'cars',} },
        ]);
        return user;
    },
    createUser: async (user) => {
        try {
            const newUser = await User.create(user);
            return newUser;
        } catch (e) {
            console.log(e);
        }
    },
    updateUserById: async (id, user) => {
        try {
            const updatedUser = await User.findByIdAndUpdate(id, user, {new: true});
            return updatedUser;
        } catch (e) {
            console.log(e);
        }
    },
    deleteUserById: async (id) => {
        try {
            await User.findByIdAndDelete(id);
        } catch (e) {
            console.log(e);
        }
    },
};
