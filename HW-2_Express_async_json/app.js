const express = require('express');
const fs = require('fs/promises');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const dataBasePath = path.join(__dirname, 'dataBase', 'users.json');


app.get('/users', async (request, response) => {
    try {
        const buffer = await fs.readFile(dataBasePath);
        const users = JSON.parse(buffer.toString());

        response.json(users);
    } catch (e) {
        console.log(e);
    }

});
app.get('/users/:userId', async (request, response) => {
    try {
        const {userId} = request.params;

        const buffer = await fs.readFile(dataBasePath);
        const users = JSON.parse(buffer.toString());

        const myUser = users.find(user => user.id === +userId);

        if (!myUser) {
            response.status(404).json(`User with id ${userId} not found!!!`);
        } else {
            response.json(myUser);
        }

    } catch (e) {
        console.log(e);
    }

});

app.post('/users', async (request, response) => {

    try {
        const user = request.body;

        if (user.name.length < 3 || typeof user.name !== 'string') {
            return response.status(400).json('Wrong name');
        }
        if (user.age <= 0 || Number.isNaN(+user.age)) {
            return response.status(400).json('Wrong age');
        }

        const buffer = await fs.readFile(dataBasePath);
        const users = JSON.parse(buffer.toString());

        const newUser = { id: users[users.length - 1].id + 1, ...user}
        users.push(newUser);

        await fs.writeFile(dataBasePath, JSON.stringify(users));

        response.json(newUser);
    } catch (e) {
        console.log(e);
    }
  
});

app.put('/users/:userId', async (request, response) => {
    try {
        const {userId} = request.params;
        const user = request.body;


        const buffer = await fs.readFile(dataBasePath);
        const users = JSON.parse(buffer.toString());

        const userForUpdate = users.find(user => user.id === +userId);

        Object.assign(userForUpdate, user);

        await fs.writeFile(dataBasePath, JSON.stringify(users));

        response.status(201).json('user updated');

    } catch (e) {
        console.log(e);
    }
});

app.delete('/users/:userId', async (request, response) => {
   try {
       const {userId} = request.params;

       const buffer = await fs.readFile(dataBasePath);
       const users = JSON.parse(buffer.toString());

       const userIndex = users.findIndex(user => user.id === +userId);

       if (userIndex === -1) {
           return response.json(`User with id ${userId} not found!!!`);
       }

       users.splice(userIndex, 1);

       await fs.writeFile(dataBasePath, JSON.stringify(users));

       response.sendStatus(204);

   } catch (e) {
       console.log(e);
   }

});



app.listen(5000, () => {
    console.log('Listening port 5000');
});














