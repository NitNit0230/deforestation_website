const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/register.html');
});

app.get('/dashboard', (req, res) => {
    res.sendFile(__dirname + '/dashboard.html');
});

app.get('/goals', (req, res) => {
    res.sendFile(__dirname + '/goals.html');
});

app.get('/success', (req, res) => {
    res.sendFile(__dirname + '/success.html');
});

app.get('/awareness', (req, res) => {
    res.sendFile(__dirname + '/awareness.html');
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
