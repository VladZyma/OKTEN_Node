const express = require('express');
const usersDb = require('./dataBase/users');
const {request} = require("express");

const app = express();

// node не может принимать request.body для этого устанавливаем
app.use(express.json());
app.use(express.urlencoded({extended: true}));
//=============================================================


app.get('/users', (request, response) => {
    console.log('users endpoint');
    // response.status(402).json({user: 'Vlad', age: 34});
    response.json(usersDb);
});
app.get('/users/:userId', (request, response) => {
    const {userId} = request.params;

    response.json(usersDb[userId]);
});


app.post('/users', (request, response) => {
    const userInfo = request.body;
    // console.log(userInfo);
    usersDb.push(userInfo);

    response.status(201).json('Created');
});

app.put('/users/:userId', (request, response) => {
    const newUserInfo = request.body;
    const {userId} = request.params;

    usersDb[userId] = newUserInfo;


    response.json('Updated')
});

app.delete('/users/:userId', (request, response) => {
    const {userId} = request.params;
    usersDb.splice(userId, 1);

    response.json('User deleted');
});




app.listen(5000, () => {
    console.log('Server listen 5000');
});