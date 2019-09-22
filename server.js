const { join } = require('path');
const express = require('express');
const { getData, getUsers } = require('./utils');
const { data, users } = require('./data.js');

const app = express();

app.use(express.static(join(__dirname, 'dist')));

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'dist', 'index.html'));
});

app.get('/list', (req, res) => {
    console.log(req.query);

    const { count } = req.query;

    const w = getData(data, count);


    res.send(w);
});

// TODO метод обработки запроса здесь
app.get('/users', (req, res) => {
    console.log('req - ', req);
    const { message } = req.query;
    
    const usersArray = getUsers(users);

    res.send(usersArray);
});

app.listen(3000, () => console.log('port 3000'));
