var app = angular.module('CustomerApp', []);
app.controller('CustomerController', function($scope,$http,$location,$window) {
	console.log("In Customer Controller");
	
	$scope.viewProfile=function(){
		console.log("In viewProfile controller");
		$window.location="/viewProfile";
	};
	
	//get the profile details when the page is loaded
		$scope.getProfileDetails=function(){
			$scope.email="ritika";
				
		//pass user_name
		$http({
			method : "GET",
			url : '/getProfileDetails',
			data : {
				"email" : $scope.email
			}
		}).success(function(data) {
			console.log("in success Customer Controller: "+JSON.stringify(data));
			$scope.userName=data.result.user_name;
			$scope.first_name=data.result.first_name;
			$scope.last_name=data.result.last_name;
			$scope.address=data.result.address;
			$scope.zipcode=data.result.zipcode;
			$scope.email=data.result.email;
			$scope.phone_no=data.result.phone_no;
			$scope.card_no=data.result.card_no;
			$scope.cvv=data.result.cvv;
			$scope.expiry=data.result.expiry;
		}).error(function(error) {
			$window.alert("Error: " +JSON.stringify(error));
		});	
		
	};

	$scope.updateProfile=function(first_name,last_name,address,zipcode,email,password,phone_no,card_no,cvv,expiry){
	
		console.log("In updateProfile controller");
		$http({
			method : "POST",
			url : '/editProfile',
			data : {
				"user_name" : $scope.user_name,
				"first_name" : first_name,
				"last_name" : last_name,
				"address" : address,
				"zipcode" : zipcode,
				"email":email,
				"password":password,
				"phone_no" : phone_no,
				"card_no": card_no,
				"cvv": cvv,
				"expiry":expiry
			}
		}).success(function(data) {
			
			console.log("in success UpdateProfile Controller: "+JSON.stringify(data));			
			
			$scope.updatesuccessmessage=true;
			
		}).error(function(error) {
			$window.alert("Error" +JSON.stringify(error));
		});	
		
	};

	/*	
$scope.viewOrderHistory=function(req,res){
    	$scope.showallbillstable="true";
    	console.log("In getAllbills controller");
    	$scope.billsList=[];
    	$scope.customerId=$window.localStorage.customerId;
    	var url="getAllBills/"+$scope.customerId;
    	dataService.getData(url,function(err,response){
			if(err){
				alert("error");
			}else{
				$scope.billsList=response.data;
				var self=this;
				self.tableParams=new NgTableParams({}, {dataset: $scope.billsList});
				//alert("select success"+JSON.stringify(response.data[0].billingId));
			}
		});
    };*/
    

});
