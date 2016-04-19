
var http = require ('http');
var nano = require('nano')('http://localhost:5984');

nano.db.create('alice', function() {
    // specify the database we are going to use
    var alice = nano.use('alice');
    // and insert a document in it
    alice.insert({ crazy: true }, 'rabbit', function(err, body, header) {
      if (err) {
        console.log('[alice.insert] ', err.message);
        return;
      }
      console.log('you have inserted the rabbit.');
      console.log(body);
    });
  });
