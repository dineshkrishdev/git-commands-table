var app = angular.module('git-tips', []);

var url = "https://raw.githubusercontent.com/git-tips/tips/master/tips.json";

app.controller('getTips', function($scope, $http) {
	$http.get(url)
	.then(function(response) {
		$scope.commands = response.data;
	});
});