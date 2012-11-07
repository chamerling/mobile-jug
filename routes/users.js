
/*
 * GET users listing.
 */

 var request = require('request');

exports.list = function(req, res){
  request('http://www.jug-montpellier.org/api/events/next.json', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body) // Print the google web page.
      res.render('users', {foo: 'bar', ABC : 'DEF'});
    }
  })
  
};