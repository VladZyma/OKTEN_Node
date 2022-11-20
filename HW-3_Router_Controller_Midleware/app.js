const express = require('express');
require('dotenv').config();

const userRouter = require('./router/user.router');
const config = require('./config/config');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/users', userRouter);

app.use(( error, request, response, next ) => {

    response.status(error.status || 500).json({
        message: error.message || 'unknown error',
        status: error.status || 500,
    });
});


app.listen(process.env.PORT, () => {
    console.log(`Listening port ${process.env.PORT}`);
});

// если используем config
// app.listen(config.PORT, () => {
//     console.log(`Listening port ${config.PORT}`);
// });
