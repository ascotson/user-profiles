var express = require('express');

var app = express();

var bodyParser = require('body-parser');

var cors = require('cors');

var session = require('express-session');

var userCtrl = require('./controllers/userCtrl');

var profileCtrl = require('./controllers/profileCtrl');

var config = require('./config');

var corOptions = {origin: 'http://localhost:3000'};

app.use(bodyParser.json());
app.use(cors(corOptions));
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
