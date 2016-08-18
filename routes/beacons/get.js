var db = require('../../database/instance');

module.exports = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  
  var collection = 
      db.search('beacons', '*')
        .then(function(results)  {
//          console.log('%j', results);
          res.send(results.body.results);
        });
  next();
}