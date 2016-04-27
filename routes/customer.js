var http = require ('http');
var nano = require('nano')('http://ec2-54-210-203-140.compute-1.amazonaws.com:5984');

exports.viewProfile = function(req,res){
	console.log("viewProfile Called");
	res.render("customerProfile");
};

exports.getProfileDetails = function(req,res){
	console.log("getProfileDetails called");
	var test = nano.use('test');
	var username=req.params.user_name;
	 test.view('login', 'by_user_name',{'key': username, 'include_docs': true}, function(err, body){
		    if(!err){
		    	console.log("Inside view");
		    	var rows=body.rows;
		    	if(typeof body.rows[0] !== "undefined")
		        {
		    		var doc_username = body.rows[0].value.user_name;
		    		var password = body.rows[0].value.password;
		    		console.log("JS output: " +body.rows[0].value);
		    		
		    			res.status(200).json({
		    				message : "success",
		    				result:	body.rows[0].value
		    			});
		        }
		    	else
		    		{
		    		console.log("Login to continue");
		    		}
		    }
		    else
		    	{
		    	console.log("Error "+err);
		    	}
		});
};