const express = require('express');
const mongoose = require('mongoose');

const {configs} = require('./configs');
const {userRouter, authRouter, carRouter} = require('./routers');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/auth', authRouter);
app.use('/users', userRouter);
app.use('/cars', carRouter);

app.use((error, request, response, next) => {
    response.status(error.status).json({
        message: error.message,
        status: error.status,
    });
});


app.listen(configs.PORT, async () => {
    await mongoose.connect(`${configs.MONGO_DB}/mongo`);
    console.log(`Listening port ${configs.PORT}`);
});
