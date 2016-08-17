var db = require('../../database/instance');

module.exports = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  
  db.newEventBuilder()
    .from('people', req.params.uid)
    .type('beacon_ping')
    .data({
      "uuid" : req.params.uuid,
      "major" : req.params.major,
      "minor" : req.params.minor,
      "state": req.params.state
    })
    .create()
    .then(function (res) {
      console.log(res.statusCode);
    });
  
  next();
}