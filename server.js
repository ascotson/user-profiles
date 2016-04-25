var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var session = require('express-session');
var config = require('./config'); //if you save the file as config.json you don't need to add module.exports in the file. Require without module.exports on the requested file pulls in the entire object. In order to access PARTS of a file (i.e. methods on a controller) you have to use module.exports and save the file as a .js file vs. a .json file. We don't have this problem if we want to require an entire .json object.
var profileCtrl = require('./controllers/profileCtrl');
var userCtrl = require('./controllers/userCtrl');
var corsOptions = {origin: 'http://localhost:3000'};

var app = express();

app.use(bodyParser.json());
app.use(cors(corsOptions));  //CORS doesn't have to be used globally across all of our routes via app.use, it can be passed to individual routes as middleware. i.e. app.get('/example', cors(), function(req, res){...}).
app.use(express.static(__dirname + '/public'));
app.use(session({
  secret: config.sessionSecret,
  saveUninitialized: true,
  resave: true
}));

console.log('Server directory is: ' + __dirname);

app.post('/api/login', userCtrl.login);
app.get('/api/profiles', profileCtrl.profile);

var port = 3000;

app.listen(port, function() {
  console.log('Listening to port ' + port);
});
