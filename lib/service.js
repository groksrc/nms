var service = function(logger) {
	
	var self = {};

	self.logger = logger || console;

	self.start = function() {
		self.logger.log('service started');
	};

	self.stop = function() {
		self.logger.log('service stopped');
	};

	return self;
};

module.exports = service;