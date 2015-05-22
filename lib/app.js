var app = function(logger) {

	//
    // Do whatever you want in here. Rip all of this out if
    // you want, it's yours.
    //
    // But keep in mind, you want outside dependencies coming
    // in on your constructor (line 1)
    //

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

module.exports = app;