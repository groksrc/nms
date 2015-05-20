var expect = require("chai").expect;
var service = require("../lib/app")();

describe("app", function() {
	describe("#start", function() {
		
		it("has a start function", function() {
			expect(service).to.have.ownProperty("start");
		});

		it("has a stop function", function() {
			expect(service).to.have.ownProperty("stop");
		});
	});
});