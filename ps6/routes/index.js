var express = require("express");
var router = express.Router();
var mongo = require("mongodb");
var assert = require("assert");

var url = 'mongodb://localhost:27017/cs400';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'cs400 Express' });
});

router.get('/get-data', function(req, res, next) {

});

router.post('/insert', function(req, res, next) {
  console.log('over here');
  var item = {
    // title: req.body.title,
    // content: req.body.content,
    // author: req.body.author
    title: "hello",
    content: "world",
    author: "root"
  };

  console.log('got here');

  mongo.connect(url, function(err, db) {
    db.collection('user-data').insertOne(item, function(err, result) {
      console.log("Item inserted");
      db.close();
    })
  })

  res.redirect('/');
});

router.post('/update', function(req, res, next) {

});

router.post('/delete', function(req, res, next) {

});

module.exports = router;


// var express = require('express');
// var router = express.Router();
// const db = require('../mongo/mongo');
//
// db.connect((err, client) => {
//   if (err) {
//     console.log(`ERR: ${err}`);
//   } else {
//     console.log(`Connected`);
//   }
// });
//
// /* GET home page. */
// router.post('/test', function (req, res, next) {
//
//   // let name = req.body.name;
//   //
//   // let nameObj = {
//   //     name: name
//   // };
//
//   console.log('before this');
//   let mongo = db.getDB();
//   console.log('after this');
//
//   mongo.collection('quotes').save(req.body, (err, result) => {
//     if (err) return console.log(err)
//
//     console.log('saved to database')
//     res.redirect('/')
//   })
//   // mongo.collection('names').insertOne(nameObj, function (err, r) {
//   //     res.send('success');
//   // });
//   // mongo.collection('names').insertOne(req.body, function (err, r) {
//   //   res.send('success');
//   // });
//   // mongo.listCollections().toArray(function(err, collInfos) {
//   //   // collInfos is an array of collection info objects that look like:
//   //   // { name: 'test', options: {} }
//   //   console.log(collInfos);
//   // });
// });
//
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
//
// module.exports = router;
