var express = require('express');
var router = express.Router();
const request = require('request');
let pikachu;
const apiUrl = 'https://pokeapi.co/api/v2/pokemon/pikachu';

/* Make request to external PokéAPI. */
request('https://pokeapi.co/api/v2/pokemon/pikachu', function (err, res, body) {
    console.log('error:', err);
    console.log('statusCode:', res && res.statusCode);
    console.log('body:', body);
    pikachu = JSON.parse(body);
});

/* GET ps4 Pikachu page. */
router.get('/', function(req, res, next) {
  res.render('ps4', {
      title: "My Favorite Pokémon",
      name: pikachu.name,
      imageUrl: pikachu.sprites.front_default,
      ability: pikachu.abilities[0].ability.name,
      apiUrl: apiUrl
  });
});

module.exports = router;
