var request = require('request');

exports.all = function(req, res){
  request('http://www.jug-montpellier.org/api/speakers/all.json', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.render('speakers', JSON.parse(body));
    }
  })  
};

exports.details = function(req, res){
  request('http://www.jug-montpellier.org/api/speakers/all.json', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var id = req.params.id;
      console.log('Speaker ID ', id);
      
      // TODO : While the API foes not allow it, filter events from ID
      var s = { title : 'foo', description : 'description'};
      res.render('speaker', s);
    } else {
      
    }
  })
};