const http = require('http');
const express = require('express');
const app = express();
const fs = require('fs');

// Config
const port = 8080;
const allowIP = 'localhost';

const exceptionSrc = '/style.css' && '/test.js';

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Exception getfiles
app.get('/test.js', (req, res) => { res.send(fs.readFileSync(__dirname + '/test.js')); });
app.get('/style.css', (req, res) => { res.send(fs.readFileSync(__dirname + '/style.css')); });


app.listen(port, (error) => {
    if (error) console.log(`Error: ${error}`);
    else
        console.log(`NodeJS server is listening on ${port}`);
});