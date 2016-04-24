var app = angular.module('CustomerApp', []);
app.controller('CustomerController', function($scope,$http,$location,$window) {
	console.log("In Customer Controller");
	
	$scope.viewProfile=function(){
		$location.path('/viewProfile');
	};
	
	//get the profile details when the page is loaded
		$scope.getProfileDetails=function(){
			$scope.user_name="ritika";
		console.log("CustomerController called"+$scope.user_name);
		
		//pass user_name
		$http({
			method : "GET",
			url : '/getProfileDetails',
			data : {
				"user_name" : $scope.user_name
			}
		}).success(function(data) {
			console.log("in success Customer Controller: "+data.length);
			$scope.firstName=data[0].firstName;
			$scope.lastName=data[0].lastName;
			$scope.zipCode=data[0].zipCode;
			$scope.city=data[0].city;
			$scope.email=data[0].email;
			$scope.phoneNo=data[0].phoneNo;
		});
		
	};

/*	$scope.updateProfile=function(firstName,lastName,city,zipCode,email,password,phoneNo){
		var details={
				firstName : firstName,
				lastName : lastName,
				city : city,
				zipCode : zipCode,
				phoneNo : phoneNo,
				customerId : $window.localStorage.customerId
		};
		console.log("details: "+ JSON.stringify(details));
		dataService.postData('updateRider',details,function(err,res){
			if(err){
				if(err.status === 500){
					console.log(err);
				}else{
					if(err.status === 403){
						//$scope.invalidError=true;
						console.log(err);
					}
				}
			}else{
				console.log("Success update");
				$scope.updatesuccessmessage=true;
			}
		});
	};

	
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
