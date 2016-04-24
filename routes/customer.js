var http = require ('http');
var nano = require('nano')('http://localhost:5984');

exports.viewProfile = function(req,res){
	res.render("customerProfile");
};

exports.getProfileDetails = function(req,res){
	
};