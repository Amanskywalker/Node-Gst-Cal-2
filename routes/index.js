var express     = require('express');
var router      = express.Router();
var config      = require('../knexfile.js');
var env         = 'development';
var knex        = require('knex')(config[env]);
module.exports  = knex;
const Request   = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  knex.select('*').from('items').orderBy('id', 'desc')
    .then(function(items){
      var count =0, count5 = 0, count12 = 0, count18 = 0, count28 = 0;
      for (var i in items) {
        count++;
        if (items[i].slab == 5) {
          count5++;
        } else if (items[i].slab == 12) {
          count12++;
        } else if (items[i].slab == 18) {
          count18++;
        } else if (items[i].slab == 28) {
          count28++;
        };
      }
      var cd = [count5/count*100, count12/count*100, count18/count*100, count28/count*100];
      console.log(cd);
      res.render('index', { title: 'GST Cal', items : items, cd : cd });
      //items.foreach
    });
  //console.dir(itemsList);
  //
});

router.post('/add', function(req, res, next) {
  var str = '{ "expr": [ "sum = '+ req.body.price +'*'+ req.body.slab +'/100","total = sum + '+ req.body.price +'"], "precision": 14}';
  Request.post({
    "headers": { "content-type": "application/json"},
    "url": "http://api.mathjs.org/v4/",
    "body": str
    }, (error, response, body) => {
      if(error) {
          return console.log(error);
      }
      var mathsAPIResponseBody = JSON.parse(body);
      console.log(mathsAPIResponseBody.result[0]);
      console.log(mathsAPIResponseBody.result[1]);
      knex('items').insert({
          name: req.body.name,
          price: req.body.price,
          slab: req.body.slab,
          sum: mathsAPIResponseBody.result[0],
          total: mathsAPIResponseBody.result[1],
          createdAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '').replace(/Z/, '+05:30'),
          updatedAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '').replace(/Z/, '+05:30')
          })
      .then( function (result) {
          res.redirect('/');
       })
    })
});

module.exports = router;
