let express = require('express');
let app = express();
let bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Home Page

app.get('/', function(req, res) {
  res.render('home');
});

app.listen('3000', function() {
  console.log('Listening to port 3000');
});
