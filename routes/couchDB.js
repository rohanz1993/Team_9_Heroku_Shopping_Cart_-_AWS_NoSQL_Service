
var http = require ('http');
var nano = require('nano')('http://localhost:5984/');
//IP of EC2 instance:5984

nano.db.create('test1', function() {
	// specify the database we are going to use
	var test1 = nano.use('test1');
	// and insert a document in it
	test1.insert({ user_name: "ritika", password: "sainapatel" , customer_id:"123" }, 'C_001', function(err, body, header) {
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

nano.db.create('cart',function(){
	var cart=nano.use('cart');
	
	cart.insert({customer_id:"123",product_details:"product details"},'C_001',function(err, body, header) {
		if (err) {
			console.log('[cart.insert] ', err.message);
			return;
		}else
			{
			console.log("you have inserted the record");
			console.log(body);
			}
		});
	
	cart.get('C_001', function(err,body)
			{
		if(err)
		{
			console.log('[cart.get] ', err.message);
			return;
		}
		console.log("Record returned");
		console.log(body);
			});
	cart.insert(
			{ "views":
			{ "by_customer_id":
			{
				"map": function(doc){
					emit(doc.customer_id,doc); //doc.customer_id is the key and product details is the value
				}
			}
			}

			},'_design/viewcart');
});

