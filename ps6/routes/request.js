var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/', function(req, res, next) {
    request('https://jsonplaceholder.typicode.com/users', function(error, response, body) {
        // const resp = res.json(body);
        JSON.parse(body);
        // console.log(resp);
        // console.log(resp[0]);
        console.log('hello');
        // console.log(body[0]);
        // console.log(body[1]);
        // console.log(body[101]);
        console.log('hmm');
        // response.body;
        // res.body
    });
});

// /* GET home page. */
// router.get('/', function(req, res, next) {
//     res.render('index', { title: 'Express' });
// });

module.exports = router;