var express = require('express');
var router = express.Router();
const request = require('request');
const db = require('../mongo/mongo');
let pikachu;
const apiUrl = 'https://pokeapi.co/api/v2/pokemon/pikachu';

db.connect((err, client) => {
    if (err) {
        console.log(`ERR: ${err}`);
    } else {
        console.log(`Connected`);
    }
});

// router.get('/', function(req, res) {
//     var passedVariable = req.query.name;
//     console.log('irhgirhgoi');
//     console.log(passedVariable);
//     // Do something with variable
// });

router.get('/bare', function (req, res, next)  {

    let mongo = db.getDB();
    mongo.collection('help').find().
    toArray(function(err, docs) {
        console.log(docs)
        res.send(docs);
    })
});

/* Make request to external PokéAPI. */
request('https://pokeapi.co/api/v2/pokemon/pikachu', function (err, res, body) {
    console.log('error:', err);
    console.log('statusCode:', res && res.statusCode);
    console.log('body:', body);
    pikachu = JSON.parse(body);
});

/* GET ps4 Pikachu page. */
router.get('/', function(req, res, next) {
    var passedVariable = req.query.name;
    console.log('over here');
    console.log(passedVariable);
  res.render('ps4', {
      title: "My Favorite Pokémon",
      name: pikachu.name,
      imageUrl: pikachu.sprites.front_default,
      ability: pikachu.abilities[0].ability.name,
      apiUrl: apiUrl
  });
});

module.exports = router;
