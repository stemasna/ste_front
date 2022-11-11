//Dependeces
const express = require("express");
const cors = require('cors');
const app = express();

const path = require('path');

app.use(cors());

app.get('/', function(req, res) {
    res.sendFile('index.html', { root:__dirname})
});
app.get('/styles', function(req, res) {
    res.sendFile('style.css', { root:__dirname})
});
app.get('/main', function(req, res) {
    res.sendFile('main.js', { root:__dirname})
});


const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Web server started on port ${PORT}`));
