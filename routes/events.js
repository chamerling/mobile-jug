var request = require('request');

exports.next = function(req, res){
  request('http://www.jug-montpellier.org/api/events/next.json', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.render('event', JSON.parse(body));
    } else {
      
    }
  })
};

exports.all = function(req, res){
  request('http://www.jug-montpellier.org/api/events/all.json', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.render('events', {events: JSON.parse(body)});
    } else {
      
    }
  })
};

exports.details = function(req, res){
  request('http://www.jug-montpellier.org/api/events/all.json', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var id = req.params.id;
      console.log('Event ID ', id);
      
      // TODO : While the API foes not allow it, filter events from ID
      var e = { title : 'foo', description : 'description'};
      res.render('event', e);
    } else {
      
    }
  })
};

