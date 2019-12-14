var express = require('express');
var router = express.Router();
const request = require('request');
const db = require('../mongo/mongo');
const fetch = require("node-fetch");

let pikachu;
let passedVariable;
let reqUrl;
const apiUrl = 'https://pokeapi.co/api/v2/pokemon/pikachu';

db.connect((err, client) => {
    if (err) {
        console.log(`ERR: ${err}`);
    } else {
        console.log(`Connected`);
    }
});

/* Set up CORS request. */
router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


/* GET ps6 Pikachu page. */
router.get('/', function(req, res, next) {
    passedVariable = req.query.name;
    console.log(passedVariable);
    reqUrl = 'https://pokeapi.co/api/v2/pokemon/' + passedVariable;
    console.log('reqUrl = ' + reqUrl);
    // res.render('index', {title: 'express'})

    // makeRequest(reqUrl, renderRequest, this.res);

    let mongo = db.getDB();
    mongo.collection('pokemon').find({name: passedVariable}).
    toArray(function(err, docs) {
        console.log("checking collection");
        console.log(docs);
        console.log(typeof docs);
        if (docs.length) {
            console.log('not empty collection');
            // console.log(docs[0].imageUrl);
            res.send([{
                title: "Pokémon Details",
                name: docs[0].name,
                imageUrl: docs[0].imageUrl,
                ability: docs[0].ability,
                apiUrl: reqUrl,
                cache: true
            },{
                title: "Pokémon Details",
                name: docs[0].name,
                imageUrl: docs[0].imageUrl,
                ability: docs[0].ability,
                apiUrl: reqUrl,
                cache: true
            },{
                title: "Pokémon Details",
                name: docs[0].name,
                imageUrl: docs[0].imageUrl,
                ability: docs[0].ability,
                apiUrl: reqUrl,
                cache: true
            },{
                title: "Pokémon Details",
                name: docs[0].name,
                imageUrl: docs[0].imageUrl,
                ability: docs[0].ability,
                apiUrl: reqUrl,
                cache: true
            },{
                title: "Pokémon Details",
                name: docs[0].name,
                imageUrl: docs[0].imageUrl,
                ability: docs[0].ability,
                apiUrl: reqUrl,
                cache: true
            }]);
        } else {
            console.log('empty collection');
            fetchData(reqUrl).then(fetchResponse => {
                if (fetchResponse == 404) {
                    console.log('oh no its a 404');
                    res.send({
                        message: '404: Pokémon not found.',
                        subtitle: 'Please check your spelling.'
                    });
                    return;
                }
                pikachu = fetchResponse;
                console.log("pikachuFetchResponse = " + pikachu);
                console.log(pikachu.name);
                console.log(pikachu.imageUrl);
                const sendToDb = {
                    name: pikachu.name,
                    imageUrl: pikachu.sprites.front_default,
                    ability: pikachu.abilities[0].ability.name,
                };
                mongo.collection('pokemon').insertOne(sendToDb, function (err, r) {
                    // res.send('success');
                    console.log("database entry added successfully");
                });
                res.send([{
                    title: "Pokémon Details",
                    name: pikachu.name,
                    imageUrl: pikachu.sprites.front_default,
                    ability: pikachu.abilities[0].ability.name,
                    apiUrl: reqUrl,
                    cache: false,
                },{
                    title: "Pokémon Details",
                    name: pikachu.name,
                    imageUrl: pikachu.sprites.front_default,
                    ability: pikachu.abilities[0].ability.name,
                    apiUrl: reqUrl,
                    cache: false,
                },{
                    title: "Pokémon Details",
                    name: pikachu.name,
                    imageUrl: pikachu.sprites.front_default,
                    ability: pikachu.abilities[0].ability.name,
                    apiUrl: reqUrl,
                    cache: false,
                }]);
            });
            console.log('pikachu = ' + pikachu);
        }
        // res.send(docs);
    });



    // makeRequest(reqUrl).then(r => {
    //     console.log("r = " + r.name)
    //     console.log('back to / function');
    //     console.log(r.name);
    //     res.render('ps6', {
    //         title: "My Favorite Pokémon",
    //         name: r.name,
    //         imageUrl: r.imageUrl,
    //         ability: r.ability,
    //         apiUrl: reqUrl
    //     });
    // });





    // renderRequest(res, makeRequest(reqUrl));

});

async function fetchData(reqUrl) {
    // read our JSON
    let apiResponse = await fetch(reqUrl);
    console.log("status = " + apiResponse.status);
    if (apiResponse.status == 404) {
        return apiResponse.status;
    }
    let pkmnApi = await apiResponse.json()
    console.log("pkmnApi = " + pkmnApi);
    return await pkmnApi;
}

async function makeRequest(reqUrl) {
    console.log("starting request function");
    /* Make request to external PokéAPI. */
    await request(reqUrl, function (err, res, body) {
        console.log('error:', err);
        console.log('statusCode:', res && res.statusCode);
        console.log('body:', body);
        pikachu = JSON.parse(body);
        console.log("done with request function");
        console.log(pikachu.order);
        // callback(arguments[1], pikachu);
        return {
            name: pikachu.name,
            imageUrl: pikachu.sprites.front_default,
            ability: pikachu.abilities[0].ability.name,
        };

    });




}

// function renderRequest(res, pokemon) {
//     console.log("starting render function");
//     res.render('ps6', {
//         title: "My Favorite Pokémon",
//         name: pokemon.name,
//         imageUrl: pokemon.sprites.front_default,
//         ability: pokemon.abilities[0].ability.name,
//         apiUrl: reqUrl
//     });
//     console.log("finished render function");
//     // callback();
// }

// router.get('/', function(req, res) {
//     var passedVariable = req.query.name;
//     console.log('irhgirhgoi');
//     console.log(passedVariable);
//     // Do something with variable
// });

router.get('/bare', function (req, res, next)  {

    let mongo = db.getDB();
    mongo.collection('pokemon').find().
    toArray(function(err, docs) {
        console.log(docs)
        res.send(docs);
    })
});



module.exports = router;
