const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

const server = express();

server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());

module.exports = {server, port};
