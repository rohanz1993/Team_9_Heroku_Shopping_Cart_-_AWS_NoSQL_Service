/**
 * New node file
 */

//var myConnection= require("./myConnection.js");
//var checkLoggedInUser= require("./checkLoggedInUser.js");
var http = require ('http');
var nano = require('nano')('http://ec2-54-210-203-140.compute-1.amazonaws.com:5984/');

exports.viewCart = function(req, res) {
	var customerid=req.param("customer_id");
	
	var cart=nano.use('cart');
	
	cart.view('viewcart','by_customer_id',{'key':customerid,'include_docs':true},function(err,body){
		if(!err)
			{
			var rows=body.rows;
			//console.log("rows"+body.rows[0].values.customer_id);
	    	if(typeof body.rows[0] !== "undefined")
	        {
	    		console.log("cart values "+body.rows[0].value.product_details);
	    		res.send({"product":body.rows[0].value.product_details});
	        }else
	        	{
	        	console.log("cart is empty");
	        	}
			}else
				{
				console.log("helloError "+err);
				}
	});
//	var connection = myConnection.myConnection();
//	if(checkLoggedInUser.checkLoggedInUser(req,res)===true)
//	{
//		var userid=req.session.loggedInUserId;
//		var username=req.session.loggedInUserName;
//		var eventname=req.param("event_description");
//		var date=req.param("event_date");
//		console.log("user id" +userid);
//		var data="INSERT INTO events (`event_description`,`event_date`,`user_id`,`user_name`) VALUES ('"+eventname+"','"+date+"','"+userid+"','"+username+"');";
//		
//		connection.query(data,function(err,rows)
//				{
//			if(err)
//				console.log(err);
//			else
//				{
//				console.log("Inserted successfully");
//				connection.end();
//				}});
//		
//		
//		
//		var username=req.session.loggedInUserName;
//		
//		var query = "SELECT events.event_date,events.event_description from user,events where user.user_id=events.user_id and user.user_name='"+username+"';";
//		connection.query(query, function(err, rows, fields) {
//			if (err) {
//				throw err;
//			}
//			else{
//				console.log("rows " +rows[0].event_date);
//				res.render('navhome',{'title':"Facebook",'user_events':rows,'user':req.session,'message':"Event added successfully"});
//				
//			}
//		});
//	}
//	
};

exports.addToCart=function(req,res)
{
	customerid=req.param("customer_id");
	var cart=nano.use('cart');
	var productdetails="product_details";
	
	cart.insert({'customer_id' : customerid , 'product_details' : productdetails},'C-003',function(err,body,header){
		if (err) {
			console.log('[cart.insert] ', err.message);
			return;
		}else
			{
			console.log("you have inserted the record");
			console.log(body);
			}
	});
	
	
	
	
};