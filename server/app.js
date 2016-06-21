var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
// var urlencodedParser = bodyParser.urlencoded({extended: false});
var pg = require('pg');
var randomNumber = require('../modules/randomNumber');
var connectionString = 'postgres://localhost:5432/zoo';

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// spin up server
app.listen(1234, 'localhost', function(req, res){
  console.log('server listening on 1234');
});

// set static folder to public
app.use(express.static('public'));

// base url to show path resolved index.html
app.get('/', function(req, res){
  res.sendFile(path.resolve('views/index.html'));
});

// post route to add new animal to db
app.post('/addAnimal', function(req, res){
  console.log('in test post: ' + 'req: ' + req.body.type);
  var results =[];
  pg.connect(connectionString, function(err, client, done){
    client.query('INSERT INTO animals (type, count) VALUES ($1, $2)', [req.body.type, randomNumber(1,100)]);
    var callDB = client.query('SELECT * FROM animals;');
    // push each row in query into our results array
    callDB.on( 'row', function ( row ){
      results.push( row );
    }); // end query push
    callDB.on( 'end', function (){
      console.log('in post, requesting animals from DB: ' + results);
      return res.json( results );
    }); // end onEnd
    if(err){
      console.log(err);
    } // end error
  }); // end pg connect
});
