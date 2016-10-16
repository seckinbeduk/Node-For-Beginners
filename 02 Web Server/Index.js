'use strict';

const http = require('http');
const express = require('express');

const app = express();

app.use(express.static('www'));

const httpServer = http.createServer(app);

httpServer.listen(3000, function(err){

    if(err){
        console.log(err.message);
        return;
    }

    console.log('web server listening on port 3000');
})