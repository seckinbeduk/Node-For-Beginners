'use strict';

const http = require('http');
const express = require('express');
const fs = require('fs');

const configJson = fs.readFileSync("./config.json");
const config = JSON.parse(configJson);

const app = express();

app.use(express.static(config.webServer.folder));

const httpServer = http.createServer(app);

httpServer.listen(config.webServer.port, function(err){

    if(err){
        console.log(err.message);
        return;
    }

    console.log('web server listening on port %d',config.webServer.port);
})