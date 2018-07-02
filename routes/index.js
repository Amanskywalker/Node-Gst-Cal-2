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
      var count5 = 0, count12 = 0, count18 = 0, count28 = 0;
      for (var i in items) {
        if (items[i].slab == 5) {
          count5++;
        } else if (items[i].slab == 12) {
          count12++;
        } else if (items[i].slab == 18) {
          count18++;
        } else if (items[i].slab == 28) {
          count28++;
}
        console.dir(items[i]);
      }
      //items.foreach
    });
  //console.dir(itemsList);
  //res.render('index', { title: 'Express' });
});

module.exports = router;
