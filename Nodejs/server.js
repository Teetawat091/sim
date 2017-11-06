var express = require('express');
var routing = express();

//use all file in "/" directory naame
routing.use(express.static(__dirname + '/'));
routing.use(express.static(__dirname + '/js'));
routing.use(express.static(__dirname + '/css'));
routing.use(express.static(__dirname + '/avartar'));

routing.listen(8000,'127.0.0.1');
