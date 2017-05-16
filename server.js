var express = require('express');
var config = require('./package.json');
console.log(config.server)
var app = express();
app.listen(config.server.port, 'localhost');

app.use(express.static('public'));
//app.use('/resources/sap-ui-cachebuster', express.static(config.resources_path));

console.log('Server satarted @ http://localhost:' + config.server.port);