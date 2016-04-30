//loading the 'login' angularJS module
var search_book = angular.module('search_book', []);
//defining the login controller
search_book.controller('search_book', function($scope, $http) {

	$scope.searchBy="";
	$scope.searchValue="";
	console.log("inside");
	$scope.unexpected_error = true;
	$scope.submit = function() {
		console.log("inside");
		$http({
			method : "POST",
			url : '/search_book',
			data : {
				"searchBy" : $scope.searchBy,
				"searchValue":$scope.searchValue
			}
		}).success(function(data) {
			if(data.status_code==200){
				$scope.rows=data.rows;
				console.log(data.rows[0]);
			}
			else{
				$scope.rows=[];
			}
			
		}).error(function(error) {
			$scope.rows=[];
		});
	};
});


var select_category = angular.module('select_category', []);

select_category.controller('select_category', function($scope, $http) {

	console.log("inside");
	$scope.unexpected_error = true;
	$scope.submit = function() {
		console.log("inside");
		$http({
			method : "POST",
			url : '/select_category',
			data : {
				"bookCategory" : $scope.bookCategory
			}
		}).success(function(data) {
			if(data.status_code==200){
				$scope.rows=data.rows;
				console.log(data.rows[0]);
			}
			
		}).error(function(error) {
			
		});
	};
	$scope.addToCart=function(row){
		
		$http({
			method : "POST",
			url :'/addToCart',
			data : {
				"book_image" : row.doc.book_image,
				"book_name" : row.doc.book_name,
				"book_author" : row.doc.book_author,
				"book_cost" : row.doc.book_price,
				"quantity" : "1",
				
			}
		}).success(function(data){
			console.log(data.msg);
		});
		
	};
});




