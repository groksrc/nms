var expect = require("chai").expect;
var service = require("../lib/app")();

describe("app", function() {
	describe("#start", function() {
		
		// You don't have to have a start and a stop function.
		// Rip and replace, it's yours now.

		it("has a start function", function() {
			expect(service).to.have.ownProperty("start");
		});

		it("has a stop function", function() {
			expect(service).to.have.ownProperty("stop");
		});
	});
});