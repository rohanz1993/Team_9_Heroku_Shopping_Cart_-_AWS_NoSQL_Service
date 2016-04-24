
var http = require ('http');
var nano = require('nano')('http://52.39.56.202:5984/');
//IP of EC2 instance:5984

nano.db.create('test1', function() {
    // specify the database we are going to use
    var test1 = nano.use('test1');
    // and insert a document in it
    test1.insert({ user_name: "ritika", password: "sainapatel" }, 'C_001', function(err, body, header) {
      if (err) {
        console.log('[test1.insert] ', err.message);
        return;
      }
      console.log('you have inserted the Record.');
      console.log(body);
    });
    //fetch a document by ID
    test1.get('C_001', function(err,body)
    		{
    			if(err)
    				{
    				console.log('[test1.get] ', err.message);
    		        return;
    				}
    			console.log("Record returned");
    			console.log(body);
    		});
    
    test1.insert(
			  { "views": 
			    { "by_user_name": 
			      { 
			    	"map": function(doc) { 
			    	  emit(doc.user_name, doc); //doc.user_name is the key and doc.password is the value
			    	  } 
			      } 
			    }
			  },'_design/login');
  });

