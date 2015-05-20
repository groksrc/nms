var service = function() {
	
	var start = function() {
		console.log('started');
	}

	var stop = function() {

	}

	return {
		start: start,
		stop: stop
	};
};

module.exports = service;