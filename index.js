const express = require('express');
const app = express();
const data = require('./data');

app.get('/', (req, res) => {
    res.send("Hello World!");
});

app.get('/students', (req, res) => {
    res.json(data)
});

app.get('/students/:id', (req, res) => {
    const { id } = req.params;
    res.json(data[id-1])
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});