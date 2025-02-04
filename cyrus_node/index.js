const config = require('./app/config/config');
const express = require('./app/config/express');
const socket = require('./app/config/socket');

const app = express();

const http = require('http').createServer(app);

http.listen(config.PORT);
console.log('App running at http://' + config.HOST + ':' + config.PORT + '/');
