const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
// const fetchGoogleMaps = require('fetch-google-maps');

var app = express();

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');
app.use(express.static('./'));;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


 // *** I'm going to revisit this method of fetching the API later ***
// app.get('/', function (req, res) {
//   fetchGoogleMaps({
//     apiKey: 'AIzaSyA0FgOhga7HIeYfO6_dMTsHk0-t_27zq9E',
//     language: 'en',
//     libraries: ['geometry']
// }).then(( Maps ) => {
//     const map = new Maps.Map(document.getElementById('map'), {
//         zoom: 8,
//         center: new Maps.LatLng(-34.397, 150.644)
//     });
// });
//   res.render('map');
// });

app.get('/', function (req, res) {
  res.render('map', {lat:35.993017, long:-78.904614});
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

app.post('/streetaddress', function (req, res) {
  let stNum = req.body.streetNumberInput;
  let stName = req.body.streetNameInput;
  let city = req.body.cityInput;
  let state = req.body.stateInput;

  fetchMap = () => {

  fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${stNum}+${stName},+${city},+${state}&key=AIzaSyA0FgOhga7HIeYfO6_dMTsHk0-t_27zq9E`)
  .then(results => {
           return results.json();
           for (i = 0; i < myJSONResult.results.length; i++) {
             sampleAddress[i] = myJSONResult.results[i].formatted_address;
             console.log(sampleAddress[0])
} return
         })

  }
})


app.listen(3000, function(req, res) {
  console.log("map app up on port 3000");
});
