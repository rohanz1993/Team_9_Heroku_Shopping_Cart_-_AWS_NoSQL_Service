//loading the 'login' angularJS module
var select_category = angular.module('select_category', []);
//defining the login controller
select_category.controller('select_category', function($scope, $http) {

	console.log("inside");
	$scope.unexpected_error = true;
	$scope.submit = function() {
		console.log("inside");
		$http({
			method : "POST",
			url : '/select_category',
			data : {
				"category" : $scope.category
			}
		}).success(function(data) {
			
		}).error(function(error) {
			
		});
	};
})

