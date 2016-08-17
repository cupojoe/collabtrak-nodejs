
require('dotenv').config();
var restify = require('restify');
var server = restify.createServer();

var getUser = require('./routes/user/get');
var postUserEvent = require('./routes/userEvent/post');

server.use(restify.bodyParser());
server.use(
  function crossOrigin(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    return next();
  }
);

server.get('/user/:uid', getUser);
server.post('/user/:uid/event', postUserEvent);

server.pre(restify.pre.userAgentConnection());

if (process.env.environment == 'local') {
  server.listen(8080, function() {
    console.log('%s listening at %s', server.name, server.url);
  });
} else {
  server.listen(process.env.PORT, function() {
    console.log('%s listening at %s', server.name, server.url);
  });
}
