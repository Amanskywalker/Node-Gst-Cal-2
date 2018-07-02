var express = require('express');
var router = express.Router();
var config      = require('../knexfile.js');
var env         = 'development';
var knex        = require('knex')(config[env]);
module.exports = knex;
const bookshelf = require('bookshelf')(knex);

/* GET home page. */
router.get('/', function(req, res, next) {
  var itemsList = knex.select('*').from('items')
    .then(function(items){
      console.dir(items);
    });
  //console.dir(itemsList);
  //res.render('index', { title: 'Express' });
});

module.exports = router;
