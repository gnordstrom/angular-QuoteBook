angular.module('quoteBook').service('mainService', function() {
	var quotes = [
		{ text: 'This too shall pass.', author: '~ Abraham Lincoln'},
		{ text: 'Strive not to be a success, but rather to be of value.', author: '~ Albert Einstein'},
		{ text: 'The key to immortality is first living a life worth remembering.', author: '~ Bruce Lee'},
		{ text: 'An investment in knowledge always pays the best interest.', author: '- Gustav Nordstrom'},
		{ text: 'I have nothing in common with lazy people who blame others for their lack of success. Great things come from hard work and perseverance. No excuses.', author: '~ Kobe Bryant'},
		{ text: 'Don\'t count the days. Make the days count.', author: '~ Muhammad Ali'},
		{ text: 'Whatever the mind of man can conceive and believe, it can achieve', author: '~ Napoleon Hill'},
		{ text: 'A winner is a dreamer who never gives up.', author: '~ Nelson Mandela'},
		{ text: 'We are not figuratively, but literally, Stardust.', author: '~ Neil DeGrasse Tyson'},
		{ text: 'What even is a jQuery?', author: '~ Tyler S. McGinnis'}
 	];

	this.getQuotes = function() {
		return quotes;
	};

	// Returns TRUE on success
	this.addData = function(newQuote) {
		if (newQuote.text && newQuote.author) {
			quotes.push(newQuote);
			return true;
		}
		return false;
	};

	this.removeData = function(textToRemove) {
		for (var i = 0; i < quotes.length; i++) {
			if (quotes[i].text.toLowerCase() === textToRemove.toLowerCase()) {
				quotes.splice(i--, 1);
			}
		}
	};

});
