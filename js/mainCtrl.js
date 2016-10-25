angular.module('quoteBook').controller('mainCtrl', function($scope, mainService) {

	$scope.quotes = mainService.getQuotes();

	$scope.deleteMe = function(textToRemove) {
		mainService.removeData(textToRemove);
	}

	$scope.addQuote = function() {
		var newQuote = {
			text: $scope.newQuoteText,
			author: $scope.newQuoteAuthor
		}
		if(mainService.addData(newQuote)) {
			$scope.newQuoteText = '';
			$scope.newQuoteAuthor = '';
		}
	}
});
