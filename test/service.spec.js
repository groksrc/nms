var expect = require("chai").expect;
var service = require("../lib/service")();

describe("service", function() {
	describe("#start", function() {
		it("has a start function", function() {
			expect(service).to.have.ownProperty("start");
		});
	});
});