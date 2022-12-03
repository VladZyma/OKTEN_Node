const {oauthService} = require('../services');
const {OAuth} = require('../dataBase')

module.exports = {
    login: async (request, response, next) => {
        try {
            const {user, body} = request;

            await oauthService.comparePasswords(user.password, body.password);

            const tokenPair = oauthService.generateAccessTokenPair({id: user._id});

            await OAuth.create({...tokenPair, _user_id: user._id});

            response.json({user, ...tokenPair});
        } catch (e) {
            next(e);
        }
    },
};
