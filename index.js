var http = require('http');
var express = require('express');
require('jsonwebtoken');
require('express-group-routes');
  

var url = require('url');

var app = express();

var port = 3000;

mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/nodejs'); 


user = require('./api/models/user.js');
user_otp = require('./api/models/userOtp.js');


bodyParser = require('body-parser');
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ 
   extended: true 
 }));

var routes = require('./api/routes/routes.js')(app);
app.use(express.static('public'));
app.listen(port);

