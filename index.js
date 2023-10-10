const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
const data = require('./data.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send("Hello world");
});

app.get('/data', (req, res) => {
    res.send(data);
})

app.listen(port, () => {
    console.log("I am live");
});