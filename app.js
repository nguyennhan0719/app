const http = require('http');
const express = require('express');
const app = express();


// Config
const port = 8080;

app.get('/', (req, res) => {
    console.log('/', req.query);
    res.send('Hello world!')
});

main();

async function main() {

}


app.listen(port, (error) => {
    if (error) console.log(`Error: ${error}`);
    else
        console.log(`NodeJS server is listening on ${port}`);
});