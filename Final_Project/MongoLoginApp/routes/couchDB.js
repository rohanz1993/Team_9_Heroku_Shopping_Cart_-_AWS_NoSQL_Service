
var http = require ('http');
var nano = require('nano')('http://52.37.129.148:5984');
//IP of EC2 instance:5984

nano.db.create('test', function() {
    // specify the database we are going to use
    var test = nano.use('test');
    // and insert a document in it
    test.insert({ name: "ritika" }, 'C_001', function(err, body, header) {
      if (err) {
        console.log('[test.insert] ', err.message);
        return;
      }
      console.log('you have inserted the Record.');
      console.log(body);
    });
    //fetch a document by ID
    test.get('C_001', function(err,body)
    		{
    			if(err)
    				{
    				console.log('[test.get] ', err.message);
    		        return;
    				}
    			console.log("Record returned");
    			console.log(body);
    		});
  });

