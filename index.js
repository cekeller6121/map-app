const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');

var app = express();

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');
app.use(express.static('./'));;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
  res.render('map');
});

app.get('/latlong', function (req, res) {
  res.render('map');
});

app.post('/latlong', function (req, res) {

    let lat = req.body.userLat;
    let long = req.body.userLong;

    res.render('map', {lat:lat, long:long})
});

app.get('/streetaddress', function (req, res) {
  res.render('map');
});

app.listen(3000, function(req, res) {
  console.log("map app up on port 3000");
});
