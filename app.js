var express = require('express')
  , routes = require('./routes')
  , users = require('./routes/users')
  , events = require('./routes/events')
  , speakers = require('./routes/speakers')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('your secret here'));
  app.use(express.session());
  app.use(app.router);
  app.use(require('stylus').middleware(__dirname + '/public'));
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/users', users.list);
app.get('/event/:id', events.details);
app.get('/events/next', events.next);
app.get('/events/all', events.all);

app.get('/speakers/all', speakers.all);
app.get('/speaker/:id', speakers.details);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});